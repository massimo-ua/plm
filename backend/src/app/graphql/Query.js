const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/QuerySchema');
const CategoriesSchema = require('./categories/QuerySchema');
const CurrenciesSchema = require('./currencies/QuerySchema');

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
      ...CurrenciesSchema(currenciesService, authService),
    },
  });
};
