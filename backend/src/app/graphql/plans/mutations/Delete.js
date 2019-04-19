const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = (Plan, resolve) => ({
  delete: {
    type: Plan,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Plan id',
      },
    },
    resolve,
  },
});
