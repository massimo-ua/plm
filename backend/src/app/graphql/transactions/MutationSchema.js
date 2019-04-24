const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
  Rollback,
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
        ...Rollback(
          Transaction,
          Resolver().middleware(auth.loggedIn).resolve(Transactions.rollback),
        ),
      },
    }),
    resolve: () => true,
  },
});
