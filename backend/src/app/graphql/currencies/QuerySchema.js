const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const Currency = require('./Currency');
const { Resolver } = require('../helpers');

module.exports = ({
  find,
  findOne,
}, {
  loggedIn,
}) => ({
  currencies: {
    type: new GraphQLObjectType({
      name: 'CurrencyQuery',
      description: 'Currency query schema',
      fields: {
        list: {
          type: GraphQLList(Currency),
          resolve: Resolver()
            .middleware(loggedIn)
            .resolve(find),
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
            .middleware(loggedIn)
            .resolve(findOne),
        },
      },
    }),
    resolve: () => true,
  },
});
