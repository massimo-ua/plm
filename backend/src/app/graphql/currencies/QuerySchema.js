const {
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');
const { List, Show } = require('./queries');

module.exports = ({
  Currency,
  Currencies,
  auth,
}) => ({
  currencies: {
    type: new GraphQLObjectType({
      name: 'CurrencyQuery',
      description: 'Currency query schema',
      fields: {
        ...List(
          Currency,
          Resolver().middleware(auth.loggedIn).resolve(Currencies.find),
        ),
        ...Show(
          Currency,
          Resolver().middleware(auth.loggedIn).resolve(Currencies.findOne),
        ),
      },
    }),
    resolve: () => true,
  },
});
