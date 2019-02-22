const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ CurrencyType, resolver }) => ({
  delete: {
    type: CurrencyType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Currency id',
      },
    },
    resolve: resolver,
  },
});
