const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/MutationSchema');

module.exports = (core) => {
  const {
    Teams: { findOne: findTeam },
    Users: usersService,
    Auth: authService,
  } = core.modules;
  return new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...UsersSchema({ ...usersService, findTeam }, authService),
    }),
  });
};
