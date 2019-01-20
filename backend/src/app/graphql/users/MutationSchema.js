const {
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');
const { Resolver } = require('../helpers');

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
    resolve: Resolver(service.signup, { authRequired: false }),
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
    resolve: Resolver(service.login, { authRequired: false }),
  },
});
