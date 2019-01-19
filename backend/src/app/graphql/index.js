const { Router } = require('express');
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');
const { Types } = require('./users');
const UsersSchema = require('./users/Schema');

module.exports = (core) => {
  const { Users: usersService } = core.modules;
  const query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...UsersSchema(usersService),
    }),
  });

  const schema = new GraphQLSchema({
    query,
    types: [...Types],
  });


  const router = Router();
  router.use('/', graphqlHTTP({
    schema,
    graphiql: true,
  }));

  core.registerRouter({
    version: 'v1',
    path: 'graphql',
    subRouter: router,
    name: 'GraphqlModule',
  });
};
