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
const { accountMapper, mirrorMapper, teamMapper } = require('../helpers/mappers');

let TransactionType = null;

const createTransactionType = ({
  findOne,
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
        resolve: Resolver().mapper(teamMapper).resolve(findTeam),
      },
      mirror: {
        get type() {
          return Transaction;
        },
        description: 'Currency that Transaction belongs to',
        resolve: Resolver().mapper(mirrorMapper).resolve(findOne),
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
      findOne: Transactions.findOne,
      findTeam: Teams.findOne,
      findAccount: Accounts.findOne,
      Account,
    });
  }
  return TransactionType;
};
