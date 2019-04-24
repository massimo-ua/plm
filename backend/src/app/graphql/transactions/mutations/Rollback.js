const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = (Transaction, resolve) => ({
  rollback: {
    type: Transaction,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Transaction id',
      },
    },
    resolve,
  },
});
