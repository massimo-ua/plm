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
        description: 'Category id',
      },
    },
    resolve: resolver,
  },
});
