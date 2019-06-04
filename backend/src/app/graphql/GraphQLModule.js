const graphqlHTTP = require ('express-graphql');
const {GraphQLSchema} = require ('graphql');
const Query = require ('./Query');
const Mutation = require ('./Mutation');
const {auth} = require ('./middleware');
const {
  Account,
  Category,
  Currency,
  Team,
  Transaction,
  User,
  Payment,
  Plan,
} = require ('./Types');

module.exports = container => ({
  register () {
    container.register ('Account', Account, [
      'Team',
      'Currency',
      'Teams',
      'Currencies',
    ]);
    container.register ('Category', Category, ['Team', 'Teams']);
    container.register ('Currency', Currency);
    container.register ('Team', Team);
    container.register ('Transaction', Transaction, [
      'Currencies',
      'Transactions',
      'Teams',
      'Accounts',
      'Account',
      'Team',
      'Account',
      'Payment',
      'Payments',
    ]);
    container.register ('User', User, ['Team', 'Teams']);
    container.register ('Payment', Payment, [
      'Categories',
      'Category',
      'Teams',
      'Team',
    ]);
    container.register ('Plan', Plan, ['Team', 'Teams', 'Plans', 'Account']);
  },
  run () {
    const {router} = container;
    const moduleRouter = router.create ();
    moduleRouter.use (auth (container));
    moduleRouter.use (
      '/',
      graphqlHTTP ({
        schema: new GraphQLSchema ({
          query: Query (container),
          mutation: Mutation (container),
        }),
        graphiql: true,
      })
    );
    router.attach ({
      version: 'v1',
      path: 'graphql',
      subRouter: moduleRouter,
      name: 'GraphqlModuleRouter',
    });
  },
});
