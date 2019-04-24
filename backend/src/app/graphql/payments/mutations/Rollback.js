const {
  GraphQLNonNull,
  GraphQLID,
} = require('graphql');

module.exports = (Payment, resolve) => ({
  rollback: {
    type: Payment,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Payment id',
      },
    },
    resolve,
  },
});
