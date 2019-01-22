const {
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');
const { Resolver } = require('../helpers');

module.exports = (service, { loggedIn }) => ({
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
    resolve: Resolver(service.signup, loggedIn, { isLoginRequired: false }),
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
    resolve: Resolver(service.login, loggedIn, { isLoginRequired: false }),
  },
});
