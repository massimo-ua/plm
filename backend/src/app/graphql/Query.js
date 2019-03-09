const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/QuerySchema');
const CategoriesSchema = require('./categories/QuerySchema');
const CurrenciesSchema = require('./currencies/QuerySchema');
const AccountsSchema = require('./accounts/QuerySchema');
const { QuerySchema: TransactionsSchema } = require('./transactions');

module.exports = (core) => {
  const {
    Teams: { findOne: findTeam },
    Users: usersService,
    Auth: authService,
    Categories: categoriesService,
    Currencies: currenciesService,
  } = core.modules;
  return new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...UsersSchema(
        {
          ...usersService,
          findTeam,
        },
        authService,
      ),
      ...CategoriesSchema({
        ...categoriesService,
        findTeam,
      }, authService),
      ...AccountsSchema(core.modules),
      ...CurrenciesSchema(currenciesService, authService),
      ...TransactionsSchema(core.modules),
    },
  });
};
