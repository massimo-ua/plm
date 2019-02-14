const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');
const User = require('./User');

module.exports = ({
  signup,
  login,
  update,
  updateProfile,
  findTeam,
}, {
  loggedIn,
  isAdmin,
}) => {
  const UserType = User({ findTeam });
  return {
    users: {
      type: new GraphQLObjectType({
        name: 'UserMutation',
        description: 'User mutation schema',
        fields: {
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
              .resolve(signup),
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
              .resolve(login),
          },
          update: {
            type: UserType,
            args: {
              id: {
                type: GraphQLNonNull(GraphQLID),
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
                type: GraphQLID,
                description: 'User team id',
              },
              isAdmin: {
                type: GraphQLBoolean,
                description: 'is User admin?',
              },
            },
            resolve: Resolver()
              .middleware(loggedIn, isAdmin)
              .resolve(update),
          },
          me: {
            type: UserType,
            args: {
              name: {
                type: GraphQLString,
                description: 'User name',
              },
              password: {
                type: GraphQLString,
                description: 'User password',
              },
            },
            resolve: Resolver()
              .middleware(loggedIn)
              .resolve(updateProfile),
          },
        },
      }),
      resolve: () => true,
    },
  };
};
