const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ Category, resolver }) => ({
  delete: {
    type: Category,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Category id',
      },
    },
    resolve: resolver,
  },
});
