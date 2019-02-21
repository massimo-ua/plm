const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ CategoryType, resolver }) => ({
  delete: {
    type: CategoryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Currency id',
      },
    },
    resolve: resolver,
  },
});
