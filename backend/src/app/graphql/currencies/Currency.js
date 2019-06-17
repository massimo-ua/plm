const {
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require ('graphql');

const {Resolver} = require ('../helpers');

const createCurrencyType = ({Currencies}) =>
  new GraphQLObjectType ({
    name: 'Currency',
    description: 'Currency schema',
    fields: {
      id: {
        type: GraphQLID,
        description: 'Currency id',
      },
      code: {
        type: GraphQLInt,
        description: 'Currency code',
      },
      shortName: {
        type: GraphQLString,
        description: 'Currency short name',
      },
      name: {
        type: GraphQLString,
        description: 'Currency full name',
      },
      home: {
        type: GraphQLBoolean,
        description: 'Home currency',
      },
      rate: {
        type: GraphQLFloat,
        description: 'Current currency exchange rate',
        resolve: Resolver ()
        .mapper (ctx => {
          const {parent, args = {}} = ctx;
          return {...ctx, args: {...args, currencyId: parent.id}};
        })
        .resolve (Currencies.getExchangeRate),
      },
    },
  });

module.exports = container => createCurrencyType (container);
