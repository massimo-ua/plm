const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

module.exports = ({ Category, resolver }) => ({
  update: {
    type: Category,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Category id',
      },
      name: {
        type: GraphQLString,
        description: 'Category name',
      },
      isHidden: {
        type: GraphQLBoolean,
        description: 'is Category hidden?',
      },
    },
    resolve: resolver,
  },
});
