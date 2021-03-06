const {
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');
const { List, Show } = require('./queries');

module.exports = ({
  Transaction,
  Transactions,
  auth,
}) => ({
  transactions: {
    type: new GraphQLObjectType({
      name: 'TransactionQuery',
      description: 'Transaction query schema',
      fields: {
        ...List(
          Transaction,
          Resolver().middleware(auth.loggedIn).resolve(Transactions.find),
        ),
        ...Show(
          Transaction,
          Resolver().middleware(auth.loggedIn).resolve(Transactions.findOne),
        ),
      },
    }),
    resolve: () => true,
  },
});
