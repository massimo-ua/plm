const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');
const Team = require('./Team');

const User = new GraphQLObjectType({
  name: 'User',
  description: 'User shchema',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'User id',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User name',
    },
    login: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User login',
    },
    isActive: {
      type: GraphQLBoolean,
      description: 'Is user account active/suspended',
    },
    team: {
      type: Team,
      description: 'Team that user belongs to',
    },
    isAdmin: {
      type: GraphQLBoolean,
      description: 'Is account belongs to admin/regular user',
    },
  },
});

module.exports = User;
