const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require('graphql');

module.exports = ({ Account, resolve }) => ({
  update: {
    type: Account,
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
