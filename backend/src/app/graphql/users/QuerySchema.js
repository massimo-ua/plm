const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');

module.exports = ({
  User,
  Users,
  auth,
}) => ({
  users: {
    type: new GraphQLObjectType({
      name: 'UserQuery',
      description: 'User query schema',
      fields: {
        show: {
          type: User,
          args: {
            id: {
              type: GraphQLNonNull(GraphQLID),
              description: 'User id',
            },
          },
          resolve: Resolver().middleware(auth.loggedIn).resolve(Users.findOne),
        },
        list: {
          type: GraphQLList(User),
          resolve: Resolver().middleware(auth.loggedIn).resolve(Users.find),
        },
        me: {
          type: User,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Users.profile),
        },
      },
    }),
    resolve: () => true,
  },
});
