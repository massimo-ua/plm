const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
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
      type: GraphQLList(CategoryType),
      resolve: Resolver()
        .middleware(loggedIn)
        .resolve(find),
    },
    category: {
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
  };
};
