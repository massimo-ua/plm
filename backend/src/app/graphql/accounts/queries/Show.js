const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ AccountType, resolve }) => ({
  show: {
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
