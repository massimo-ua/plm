const {
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = service => ({
  signup: {
    type: GraphQLString,
    args: {
      username: {
        type: GraphQLNonNull(GraphQLString),
        description: 'User display name',
      },
      login: {
        type: GraphQLNonNull(GraphQLString),
        description: 'User login name',
      },
      password: {
        type: GraphQLNonNull(GraphQLString),
        description: 'User password',
      },
    },
    resolve: (root, args) => service.signup(args),
  },
  login: {
    type: GraphQLString,
    args: {
      login: {
        type: GraphQLNonNull(GraphQLString),
        description: 'User login name',
      },
      password: {
        type: GraphQLNonNull(GraphQLString),
        description: 'User password',
      },
    },
    resolve: (root, args) => service.login(args),
  },
});
