const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ Currency, resolver }) => ({
  home: {
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
