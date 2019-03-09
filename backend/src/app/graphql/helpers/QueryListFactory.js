const {
  GraphQLList,
} = require('graphql');

module.exports = ({ Type, resolve }) => ({
  list: {
    type: GraphQLList(Type),
    resolve,
  },
});
