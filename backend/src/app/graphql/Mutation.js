const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/MutationSchema');

module.exports = (core) => {
  const { Users: usersService, Auth: authService } = core.modules;
  return new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...UsersSchema(usersService, authService),
    }),
  });
};
