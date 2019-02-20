const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

module.exports = ({ CategoryType, resolver }) => ({
  update: {
    type: CategoryType,
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
