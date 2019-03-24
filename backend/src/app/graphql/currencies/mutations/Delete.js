const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ Currency, resolver }) => ({
  delete: {
    type: Currency,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Currency id',
      },
    },
    resolve: resolver,
  },
});
