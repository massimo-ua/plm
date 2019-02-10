const { Router } = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const Query = require('./Query');
const Mutation = require('./Mutation');
const { auth } = require('./middleware');


module.exports = (core) => {
  const query = Query(core);
  const mutation = Mutation(core);

  const schema = new GraphQLSchema({
    query,
    mutation,
  });

  const router = Router();
  router.use(auth(core));
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
