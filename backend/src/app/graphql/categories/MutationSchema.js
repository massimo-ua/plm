const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');
const { Resolver } = require('../helpers');
const Category = require('./Category');

module.exports = ({ create }, { loggedIn }) => ({
  createCategory: {
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
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(create),
  },
});
