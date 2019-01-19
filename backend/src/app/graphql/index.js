const { Router } = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { Types } = require('./users');
const Query = require('./Query');
const Mutation = require('./Mutation');


module.exports = (core) => {
  const query = Query(core);
  const mutation = Mutation(core);

  const schema = new GraphQLSchema({
    query,
    mutation,
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
