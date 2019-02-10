const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');

const Team = require('../teams/Team');

const Category = new GraphQLObjectType({
  name: 'Category',
  description: 'Category shchema',
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
    },
  },
});

module.exports = Category;
