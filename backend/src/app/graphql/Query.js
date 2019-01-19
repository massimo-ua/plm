const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/QuerySchema');

module.exports = (core) => {
  const { Users: usersService } = core.modules;
  return new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...UsersSchema(usersService),
    }),
  });
};
