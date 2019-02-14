const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
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
    users: {
      type: new GraphQLObjectType({
        name: 'UserQuery',
        description: 'User query schema',
        fields: {
          show: {
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
          list: {
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
        },
      }),
      resolve: () => true,
    },
  };
};
