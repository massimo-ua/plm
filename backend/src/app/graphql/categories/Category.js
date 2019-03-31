const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');

const { Resolver } = require('../helpers');
const { teamMapper } = require('../helpers/mappers');

const createCategoryType = ({ Teams, Team, }) => new GraphQLObjectType({
  name: 'Category',
  description: 'Category schema',
  fields: {
    id: {
      type: GraphQLID,
      description: 'Category id',
    },
    name: {
      type: GraphQLString,
      description: 'Category name',
    },
    type: {
      type: GraphQLString,
      description: 'Category type either P(Profit) or L(Loss)',
    },
    isHidden: {
      type: GraphQLBoolean,
      description: 'Is Category hidden/visible',
    },
    team: {
      type: Team,
      description: 'Team id that category belongs to',
      resolve: Resolver().mapper(teamMapper).resolve(Teams.findOne),
    },
  },
});

module.exports = container => createCategoryType(container);
