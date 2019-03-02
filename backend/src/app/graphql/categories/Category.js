const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');

const Team = require('../teams/Team');
const { Resolver } = require('../helpers');

let CategoryType = null;

const createCategoryType = findTeam => new GraphQLObjectType({
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
      resolve: Resolver()
        .resolve(findTeam),
    },
  },
});

module.exports = ({ findTeam }) => {
  if (!CategoryType) {
    CategoryType = createCategoryType(findTeam);
  }
  return CategoryType;
};
