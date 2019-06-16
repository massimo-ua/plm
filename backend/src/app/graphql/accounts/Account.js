const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require ('graphql');

const {Resolver} = require ('../helpers');
const {currencyMapper, teamMapper, selfMapper} = require ('../helpers/mappers');

const createAccountType = ({Team, Currency, Teams, Currencies, Accounts}) =>
  new GraphQLObjectType ({
    name: 'Account',
    description: 'Account schema',
    fields: {
      id: {
        type: GraphQLID,
        description: 'Account id',
      },
      name: {
        type: GraphQLString,
        description: 'Account name',
      },
      type: {
        type: GraphQLString,
        description: 'Account type either S(Saving) or C(Credit) or SC(Saving/Credit)',
      },
      balance: {
        type: GraphQLInt,
        description: 'Account balance',
        resolve: Resolver ()
          .mapper (selfMapper)
          .resolve (Accounts.calculateBalance),
      },
      team: {
        type: Team,
        description: 'Team that account belongs to',
        resolve: Resolver ().mapper (teamMapper).resolve (Teams.findOne),
      },
      currency: {
        type: Currency,
        description: 'Currency that account belongs to',
        resolve: Resolver ()
          .mapper (currencyMapper)
          .resolve (Currencies.findOne),
      },
    },
  });

module.exports = container => createAccountType (container);
