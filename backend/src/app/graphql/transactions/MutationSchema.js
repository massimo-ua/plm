const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
} = require('./mutations');
const { Resolver } = require('../helpers');
const Transaction = require('./Transaction');

module.exports = ({
  Teams,
  Accounts,
  Currencies,
  Transactions,
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
        name: 'TransactionMutation',
        description: 'Transaction mutation schema',
        fields: {
          ...Create({
            TransactionType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Transactions.create),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
