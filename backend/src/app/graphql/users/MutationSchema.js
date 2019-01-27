const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');
const { Resolver } = require('../helpers');
const User = require('./User');

module.exports = (service, { loggedIn, isAdmin }) => ({
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
    resolve: Resolver()
      .context({ isLoginRequired: false })
      .middleware(loggedIn)
      .resolve(service.signup),
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
    resolve: Resolver()
      .context({ isLoginRequired: false })
      .middleware(loggedIn)
      .resolve(service.login),
  },
  update: {
    type: User,
    args: {
      id: {
        type: GraphQLInt,
        description: 'User id',
      },
      name: {
        type: GraphQLString,
        description: 'User name',
      },
      password: {
        type: GraphQLString,
        description: 'User password',
      },
      isActive: {
        type: GraphQLBoolean,
        description: 'is User active?',
      },
      teamId: {
        type: GraphQLInt,
        description: 'User team id',
      },
      isAdmin: {
        type: GraphQLBoolean,
        description: 'is User admin?',
      },
    },
    resolve: Resolver()
      .middleware(loggedIn, isAdmin)
      .resolve(service.update),
  },
});
