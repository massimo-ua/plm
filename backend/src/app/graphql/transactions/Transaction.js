const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

const Team = require('../teams/Team');
const AccountType = require('../accounts/Account');
const { Resolver } = require('../helpers');

let TransactionType = null;

const accountMapper = (ctx) => {
  const { parent, args = {} } = ctx;
  return { ...ctx, args: { ...args, id: parent.accountId } };
};

const createTransactionType = ({
  findTransaction,
  findTeam,
  findAccount,
  Account,
}) => {
  const Transaction = new GraphQLObjectType({
    name: 'Transaction',
    description: 'Transaction schema',
    fields: {
      id: {
        type: GraphQLID,
        description: 'Transaction id',
      },
      account: {
        type: Account,
        description: 'Account that Transaction belongs to',
        resolve: Resolver().mapper(accountMapper).resolve(findAccount),
      },
      actualDate: {
        type: GraphQLDate,
        description: 'Transaction actual date',
      },
      type: {
        type: GraphQLString,
        description: 'Transaction type either D(Debit) or C(Credit)',
      },
      team: {
        type: Team,
        description: 'Team that Transaction belongs to',
        resolve: Resolver().resolve(findTeam),
      },
      mirror: {
        get type() {
          return Transaction;
        },
        description: 'Currency that Transaction belongs to',
        resolve: Resolver().resolve(findTransaction),
      },
      notes: {
        type: GraphQLString,
        description: 'Transaction notes',
      },
    },
  });
  return Transaction;
};

module.exports = ({
  Teams,
  Currencies,
  Accounts,
  Transactions,
}) => {
  if (!TransactionType) {
    const Account = AccountType({ Teams, Currencies });
    TransactionType = createTransactionType({
      findTransaction: Transactions.findOne,
      findTeam: Teams.findOne,
      findAccount: Accounts.findOne,
      Account,
    });
  }
  return TransactionType;
};
