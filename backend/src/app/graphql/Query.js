const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/QuerySchema');
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
    fields: () => ({
      ...UsersSchema({
        ...usersService,
        findTeam,
      }, authService),
      ...CategoriesSchema(categoriesService, authService),
    }),
  });
};
