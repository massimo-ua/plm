const {
  GraphQLObjectType,
} = require('graphql');
const { Create, Update, Delete } = require('./mutations');
const { Resolver } = require('../helpers');
const Category = require('./Currency');

module.exports = ({
  create,
  update,
  remove,
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
          ...Delete({
            CategoryType,
            resolver: Resolver().middleware(loggedIn).resolve(remove),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
