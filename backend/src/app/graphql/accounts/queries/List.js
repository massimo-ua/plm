const {
  GraphQLList,
} = require('graphql');

module.exports = ({ AccountType, resolver }) => ({
  list: {
    type: GraphQLList(AccountType),
    resolve: resolver,
  },
});
