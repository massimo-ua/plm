const {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const User = require('./User');
const { Resolver } = require('../helpers');

module.exports = (service, { loggedIn }) => ({
  user: {
    type: User,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLInt),
        description: 'User id',
      },
    },
    resolve: Resolver(service.findById, loggedIn),
  },
  users: {
    type: GraphQLList(User),
    resolve: Resolver(service.findAll, loggedIn),
  },
});
