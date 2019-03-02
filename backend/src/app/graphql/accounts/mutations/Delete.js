const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ AccountType, resolve }) => ({
  delete: {
    type: AccountType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Account id',
      },
    },
    resolve,
  },
});
