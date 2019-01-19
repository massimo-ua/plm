const {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const User = require('./User');

module.exports = service => ({
  user: {
    type: User,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLInt),
        description: 'User id',
      },
    },
    resolve: (root, args) => service.findById(args),
  },
  users: {
    type: GraphQLList(User),
    resolve: () => service.findAll(),
  },
});
