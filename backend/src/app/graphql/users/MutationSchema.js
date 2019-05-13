const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} = require ('graphql');
const {Resolver} = require ('../helpers');

module.exports = ({User, Users, auth}) => ({
  users: {
    type: new GraphQLObjectType ({
      name: 'UserMutation',
      description: 'User mutation schema',
      fields: {
        signup: {
          type: GraphQLString,
          args: {
            username: {
              type: GraphQLNonNull (GraphQLString),
              description: 'User display name',
            },
            login: {
              type: GraphQLNonNull (GraphQLString),
              description: 'User login name',
            },
            password: {
              type: GraphQLNonNull (GraphQLString),
              description: 'User password',
            },
          },
          resolve: Resolver ()
            .context ({isLoginRequired: false})
            .middleware (auth.loggedIn)
            .resolve (Users.signup),
        },
        login: {
          type: GraphQLString,
          args: {
            login: {
              type: GraphQLNonNull (GraphQLString),
              description: 'User login name',
            },
            password: {
              type: GraphQLNonNull (GraphQLString),
              description: 'User password',
            },
          },
          resolve: Resolver ()
            .context ({isLoginRequired: false})
            .middleware (auth.loggedIn)
            .resolve (Users.login),
        },
        update: {
          type: User,
          args: {
            id: {
              type: GraphQLNonNull (GraphQLID),
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
          resolve: Resolver ()
            .middleware (auth.loggedIn, auth.isAdmin)
            .resolve (Users.update),
        },
        me: {
          type: User,
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
          resolve: Resolver ()
            .middleware (auth.loggedIn)
            .resolve (Users.updateProfile),
        },
      },
    }),
    resolve: () => true,
  },
});
