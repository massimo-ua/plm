const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

module.exports = ({ Category, resolver }) => ({
  create: {
    type: Category,
    args: {
      name: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Category name',
      },
      type: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Category type either P or L',
      },
      isHidden: {
        type: GraphQLBoolean,
        description: 'is Category hidden?',
      },
    },
    resolve: resolver,
  },
});
