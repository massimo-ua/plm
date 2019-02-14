const { GraphQLObjectType } = require('graphql');
const UserQuery = require('./users/QuerySchema');
const CategoriesSchema = require('./categories/QuerySchema');

module.exports = (core) => {
  const {
    Teams: { findOne: findTeam },
    Users: usersService,
    Auth: authService,
    Categories: categoriesService,
  } = core.modules;
  return new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...UserQuery(
        {
          ...usersService,
          findTeam,
        },
        authService,
      ),
      ...CategoriesSchema({
        ...categoriesService,
        findTeam,
      }, authService),
    },
  });
};
