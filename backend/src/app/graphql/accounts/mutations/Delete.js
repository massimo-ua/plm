const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ Account, resolve }) => ({
  delete: {
    type: Account,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Account id',
      },
    },
    resolve,
  },
});
