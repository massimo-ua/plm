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
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(service.findById),
  },
  users: {
    type: GraphQLList(User),
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(service.findAll),
  },
  me: {
    type: User,
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(service.me),
  },
});
