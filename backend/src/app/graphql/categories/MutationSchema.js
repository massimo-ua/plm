const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');
const Category = require('./Category');

module.exports = ({
  create,
  findTeam,
}, {
  loggedIn,
}) => {
  const CategoryType = Category({ findTeam });
  return {
    categories: {
      type: new GraphQLObjectType({
        name: 'CategoryMutation',
        description: 'Category mutation schema',
        fields: {
          create: {
            type: CategoryType,
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
        },
      }),
    },
  };
};
