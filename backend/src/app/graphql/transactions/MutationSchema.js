const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
} = require('./mutations');
const { Resolver } = require('../helpers');

module.exports = ({
  Transaction,
  Transactions,
  auth,
}) => ({
  transactions: {
    type: new GraphQLObjectType({
      name: 'TransactionMutation',
      description: 'Transaction mutation schema',
      fields: {
        ...Create({
          Transaction,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Transactions.create),
        }),
      },
    }),
    resolve: () => true,
  },
});
