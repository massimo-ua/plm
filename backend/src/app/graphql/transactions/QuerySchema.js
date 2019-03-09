const {
  GraphQLObjectType,
} = require('graphql');
const Transaction = require('./Transaction');
const { Resolver } = require('../helpers');
const { List, Show } = require('./queries');

module.exports = ({
  Transactions,
  Currencies,
  Accounts,
  Teams,
  Auth,
}) => {
  const TransactionType = Transaction({
    Transactions,
    Currencies,
    Accounts,
    Teams,
  });
  return {
    transactions: {
      type: new GraphQLObjectType({
        name: 'TransactionQuery',
        description: 'Transaction query schema',
        fields: {
          ...List({
            TransactionType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Transactions.find),
          }),
          ...Show({
            TransactionType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Transactions.findOne),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
