const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
  Update,
  Delete,
  SetAsHome,
} = require('./mutations');
const { Resolver } = require('../helpers');

module.exports = ({
  Currency,
  Currencies,
  auth,
}) => ({
  currencies: {
    type: new GraphQLObjectType({
      name: 'CurrencyMutation',
      description: 'Currency mutation schema',
      fields: {
        ...Create({
          Currency,
          resolver: Resolver().middleware(auth.loggedIn, auth.isAdmin).resolve(Currencies.create),
        }),
        ...Update({
          Currency,
          resolver: Resolver().middleware(auth.loggedIn, auth.isAdmin).resolve(Currencies.update),
        }),
        ...Delete({
          Currency,
          resolver: Resolver().middleware(auth.loggedIn, auth.isAdmin).resolve(Currencies.remove),
        }),
        ...SetAsHome({
          Currency,
          resolver: Resolver().middleware(auth.loggedIn, auth.isAdmin).resolve(Currencies.setAsHome),
        }),
      },
    }),
    resolve: () => true,
  },
});
