const { GraphQLObjectType } = require('graphql');
const UserMutation = require('./users/MutationSchema');
const CategoryMutation = require('./categories/MutationSchema');
const CurrencyMutation = require('./currencies/MutationSchema');

module.exports = (core) => {
  const {
    Teams: { findOne: findTeam },
    Users: usersService,
    Auth: authService,
    Categories: categoriesService,
    Currencies: currenciesService,
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
      ...CurrencyMutation(
        currenciesService,
        authService,
      ),
    },
  });
};
