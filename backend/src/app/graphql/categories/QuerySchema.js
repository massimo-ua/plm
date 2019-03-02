const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const Category = require('./Category');
const { Resolver } = require('../helpers');

module.exports = ({
  find,
  findOne,
  findTeam,
}, {
  loggedIn,
}) => {
  const CategoryType = Category({ findTeam });
  return {
    categories: {
      type: new GraphQLObjectType({
        name: 'CategoryQuery',
        description: 'Category query schema',
        fields: {
          list: {
            type: GraphQLList(CategoryType),
            resolve: Resolver()
              .middleware(loggedIn)
              .resolve(find),
          },
          show: {
            type: CategoryType,
            args: {
              id: {
                type: GraphQLNonNull(GraphQLID),
                description: 'Category id',
              },
            },
            resolve: Resolver()
              .middleware(loggedIn)
              .resolve(findOne),
          },
        },
      }),
      resolve: () => true,
    },
  };
};
