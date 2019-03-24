const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');

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
        list: {
          type: GraphQLList(Currency),
          resolve: Resolver()
            .middleware(auth.loggedIn)
            .resolve(Currencies.find),
        },
        show: {
          type: Currency,
          args: {
            id: {
              type: GraphQLNonNull(GraphQLID),
              description: 'Currency id',
            },
          },
          resolve: Resolver()
            .middleware(auth.loggedIn)
            .resolve(Currencies.findOne),
        },
      },
    }),
    resolve: () => true,
  },
});
