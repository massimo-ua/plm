const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const Team = new GraphQLObjectType({
  name: 'Team',
  description: 'Team schema',
  fields: {
    id: {
      type: GraphQLID,
      description: 'Team id',
    },
    name: {
      type: GraphQLString,
      description: 'Team name',
    },
  },
});

module.exports = Team;
