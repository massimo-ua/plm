const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

const Team = require('../teams/Team');
const Currency = require('../currencies/Currency');
const { Resolver } = require('../helpers');
const { currencyMapper, teamMapper } = require('../helpers/mappers');

let AccountType = null;

const createAccountType = (findTeam, findCurrency) => new GraphQLObjectType({
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
    },
    team: {
      type: Team,
      description: 'Team that account belongs to',
      resolve: Resolver()
        .mapper(teamMapper)
        .resolve(findTeam),
    },
    currency: {
      type: Currency,
      description: 'Currency that account belongs to',
      resolve: Resolver()
        .mapper(currencyMapper)
        .resolve(findCurrency),
    },
  },
});

module.exports = ({ Teams, Currencies }) => {
  if (!AccountType) {
    AccountType = createAccountType(Teams.findOne, Currencies.findOne);
  }
  return AccountType;
};
