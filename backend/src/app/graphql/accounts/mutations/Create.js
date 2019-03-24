const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = ({ Account, resolve }) => ({
  create: {
    type: Account,
    args: {
      name: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Account name',
      },
      type: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Account type',
      },
      currencyId: {
        type: GraphQLNonNull(GraphQLInt),
        description: 'Account currency',
      },
    },
    resolve,
  },
});
