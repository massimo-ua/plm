const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = ({ CurrencyType, resolver }) => ({
  create: {
    type: CurrencyType,
    args: {
      code: {
        type: GraphQLNonNull(GraphQLInt),
        description: 'Currency code',
      },
      shortName: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Currency short name',
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Currency name',
      },
    },
    resolve: resolver,
  },
});
