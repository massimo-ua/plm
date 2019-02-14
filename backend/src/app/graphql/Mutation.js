const { GraphQLObjectType } = require('graphql');
const UserMutation = require('./users/MutationSchema');
const CategoryMutation = require('./categories/MutationSchema');

module.exports = (core) => {
  const {
    Teams: { findOne: findTeam },
    Users: usersService,
    Auth: authService,
    Categories: categoriesService,
  } = core.modules;

  return new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...UserMutation(
        {
          ...usersService,
          findTeam,
        },
        authService,
      ),
      ...CategoryMutation(
        {
          ...categoriesService,
          findTeam,
        },
        authService,
      ),
    },
  });
};
