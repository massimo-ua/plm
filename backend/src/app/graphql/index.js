const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const Query = require('./Query');
const Mutation = require('./Mutation');
const { auth } = require('./middleware');
const {
  Account,
  Category,
} = require('./Types');


module.exports = {
  register(container) {
    const query = Query(container);
    const mutation = Mutation(container);
    const schema = new GraphQLSchema({
      query,
      mutation,
    });
    container.register('AppGraphQLSchema', schema);
    container.register('Account', Account, ['Team', 'Currency', 'Teams', 'Currencies']);
    container.register('Category', Category, ['Team', 'Teams']);
  },
  run(container) {
    const { router, AppGraphQLSchema } = container;
    const moduleRouter = router.create();
    moduleRouter.use(auth(container));
    moduleRouter.use('/', graphqlHTTP({
      schema: AppGraphQLSchema,
      graphiql: true,
    }));
    core.registerRouter({
      version: 'v1',
      path: 'graphql',
      subRouter: moduleRouter,
      name: 'GraphqlModule',
    });
  },
};
