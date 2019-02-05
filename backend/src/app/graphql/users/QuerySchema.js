const {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const User = require('./User');
const { Resolver } = require('../helpers');


module.exports = ({ find, findOne, profile }, { loggedIn }) => ({
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
      .resolve(findOne),
  },
  users: {
    type: GraphQLList(User),
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(find),
  },
  me: {
    type: User,
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(profile),
  },
});
