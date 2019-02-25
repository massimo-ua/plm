const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ AccountType, resolver }) => ({
  list: {
    type: AccountType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Account id',
      },
    },
    resolve: resolver,
  },
});
