const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const Query = require('./Query');
const Mutation = require('./Mutation');
const { auth } = require('./middleware');
const {
  Account,
  Category,
  Currency,
  Team,
  Transaction,
  User,
  Payment,
} = require('./Types');


module.exports = {
  register(container) {
    container.register('Account', Account, ['Team', 'Currency', 'Teams', 'Currencies']);
    container.register('Category', Category, ['Team', 'Teams']);
    container.register('Currency', Currency);
    container.register('Team', Team);
    container.register('Transaction', Transaction, [
      'Transactions',
      'Teams',
      'Accounts',
      'Account',
      'Team',
      'Account',
      'Payment',
      'Payments',
    ]);
    container.register('User', User, ['Team', 'Teams']);
    container.register('Payment', Payment, ['Categories', 'Category', 'Teams', 'Team']);
  },
  run(container) {
    const { router } = container;
    const moduleRouter = router.create();
    moduleRouter.use(auth(container));
    moduleRouter.use('/', graphqlHTTP({
      schema: new GraphQLSchema({
        query: Query(container),
        mutation: Mutation(container),
      }),
      graphiql: true,
    }));
    router.attach({
      version: 'v1',
      path: 'graphql',
      subRouter: moduleRouter,
      name: 'GraphqlModuleRouter',
    });
  },
};
