const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');
const { Resolver } = require('../helpers');

const createUserType = ({ Team, Teams }) => new GraphQLObjectType({
  name: 'User',
  description: 'User schema',
  fields: {
    id: {
      type: GraphQLID,
      description: 'User id',
    },
    name: {
      type: GraphQLString,
      description: 'User name',
    },
    login: {
      type: GraphQLString,
      description: 'User login',
    },
    isActive: {
      type: GraphQLBoolean,
      description: 'Is user active or suspended?',
    },
    team: {
      type: Team,
      description: 'Team that user belongs to',
      resolve: Resolver().resolve(Teams.findOne),
    },
    isAdmin: {
      type: GraphQLBoolean,
      description: 'Is admin or regular user?',
    },
  },
});

module.exports = container => createUserType(container);
