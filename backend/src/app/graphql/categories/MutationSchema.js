const {
  GraphQLObjectType,
} = require('graphql');
const { Create, Update } = require('./mutations');
const { Resolver } = require('../helpers');
const Category = require('./Category');

module.exports = ({
  create,
  update,
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
          ...Create({
            CategoryType,
            resolver: Resolver().middleware(loggedIn).resolve(create),
          }),
          ...Update({
            CategoryType,
            resolver: Resolver().middleware(loggedIn).resolve(update),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
