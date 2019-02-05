const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

const Team = new GraphQLObjectType({
  name: 'Team',
  description: 'Team schema',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'Team id',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'Team name',
    },
  },
});

module.exports = Team;
