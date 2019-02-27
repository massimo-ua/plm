const { GraphQLObjectType } = require('graphql');
const UserMutation = require('./users/MutationSchema');
const CategoryMutation = require('./categories/MutationSchema');
const CurrencyMutation = require('./currencies/MutationSchema');
const AccountMutation = require('./accounts/MutationSchema');

module.exports = (core) => {
  const {
    Teams: { findOne: findTeam },
    Users: usersService,
    Auth: authService,
    Categories: categoriesService,
    Currencies: currenciesService,
    Accounts: accountsService,
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
      ...AccountMutation({
        ...accountsService,
        findTeam,
        findCurrency: currenciesService.findOne,
      }, authService),
    },
  });
};
