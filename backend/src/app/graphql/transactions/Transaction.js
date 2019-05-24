const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

const { Resolver } = require('../helpers');
const {
  accountMapper,
  teamMapper,
  transactionPaymentsMapper,
  transactionRateMapper,
} = require('../helpers/mappers');

const createTransactionType = ({
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
      srcAccount: {
        type: Account,
        description: 'Source account that assets was debit from',
        resolve: Resolver().mapper(accountMapper).resolve(Accounts.findOne),
      },
      dstAccount: {
        type: Account,
        description: 'Destination account that assets was credit to',
        resolve: Resolver().mapper(accountMapper).resolve(Accounts.findOne),
      },
      actualDate: {
        type: GraphQLDate,
        description: 'Transaction actual date',
      },
      team: {
        type: Team,
        description: 'Team that Transaction belongs to',
        resolve: Resolver().mapper(teamMapper).resolve(Teams.findOne),
      },
      total: {
        type: GraphQLInt,
        description: 'Total amount of Transaction',
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
        resolve: Resolver().mapper(transactionRateMapper).resolve(Currencies.getExchangeRate),
      },
    },
  });
  return Transaction;
};

module.exports = container => createTransactionType(container);
