const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');
const Team = require('../teams/Team');
const { Resolver } = require('../helpers');

let UserType = null;

const createUserType = findTeam => new GraphQLObjectType({
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
      description: 'Is user account active/suspended',
    },
    team: {
      type: Team,
      description: 'Team that user belongs to',
      resolve: Resolver()
        .resolve(findTeam),
    },
    isAdmin: {
      type: GraphQLBoolean,
      description: 'Is account belongs to admin/regular user',
    },
  },
});

module.exports = ({ findTeam }) => {
  if (!UserType) {
    UserType = createUserType(findTeam);
  }
  return UserType;
};
