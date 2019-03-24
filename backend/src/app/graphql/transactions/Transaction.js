const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

const { Resolver } = require('../helpers');
const { accountMapper, mirrorMapper, teamMapper } = require('../helpers/mappers');

const createTransactionType = ({
  Transactions,
  Teams,
  Accounts,
  Account,
  Team,
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
        resolve: Resolver().mapper(accountMapper).resolve(Accounts.findOne),
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
        resolve: Resolver().mapper(teamMapper).resolve(Teams.findOne),
      },
      mirror: {
        get type() {
          return Transaction;
        },
        description: 'Currency that Transaction belongs to',
        resolve: Resolver().mapper(mirrorMapper).resolve(Transactions.findOne),
      },
      notes: {
        type: GraphQLString,
        description: 'Transaction notes',
      },
    },
  });
  return Transaction;
};

module.exports = container => createTransactionType(container);
