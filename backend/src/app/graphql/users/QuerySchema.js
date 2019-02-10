const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const User = require('./User');
const { Resolver } = require('../helpers');


module.exports = ({
  find,
  findOne,
  profile,
  findTeam,
}, {
  loggedIn,
}) => {
  const UserType = User({ findTeam });
  return {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
          description: 'User id',
        },
      },
      resolve: Resolver()
        .middleware(loggedIn)
        .resolve(findOne),
    },
    users: {
      type: GraphQLList(UserType),
      resolve: Resolver()
        .middleware(loggedIn)
        .resolve(find),
    },
    me: {
      type: UserType,
      resolve: Resolver()
        .middleware(loggedIn)
        .resolve(profile),
    },
  };
};
