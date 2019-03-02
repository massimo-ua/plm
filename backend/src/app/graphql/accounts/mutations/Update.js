const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports = ({ AccountType, resolve }) => ({
  update: {
    type: AccountType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Account id',
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Account name',
      },
    },
    resolve,
  },
});
