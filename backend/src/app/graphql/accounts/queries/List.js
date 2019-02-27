const {
  GraphQLList,
} = require('graphql');

module.exports = ({ AccountType, resolve }) => ({
  list: {
    type: GraphQLList(AccountType),
    resolve,
  },
});
