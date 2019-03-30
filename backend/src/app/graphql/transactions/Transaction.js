const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

const { Resolver } = require('../helpers');
const {
  accountMapper,
  mirrorMapper,
  teamMapper,
  transactionPaymentsMapper,
  transactionRateMapper,
} = require('../helpers/mappers');

const createTransactionType = ({
  Transactions,
  Currencies,
  Teams,
  Accounts,
  Account,
  Team,
  Payment,
  Payments,
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
      payments: {
        type: GraphQLList(Payment),
        description: 'Transaction payments',
        resolve: Resolver().mapper(transactionPaymentsMapper).resolve(Payments.find),
      },
      rate: {
        type: GraphQLFloat,
        description: 'Transaction currency exchange rate',
        resolve: Resolver().mapper(transactionRateMapper).resolve(Currencies.getExchangeRate)
      },
    },
  });
  return Transaction;
};

module.exports = container => createTransactionType(container);
