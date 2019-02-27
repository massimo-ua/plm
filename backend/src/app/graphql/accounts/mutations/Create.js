const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = ({ AccountType, resolve }) => ({
  create: {
    type: AccountType,
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
