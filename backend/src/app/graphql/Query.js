const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/QuerySchema');

module.exports = (core) => {
  const { Users: usersService, Auth: authService } = core.modules;
  return new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...UsersSchema(usersService, authService),
    }),
  });
};
