const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

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
  },
});

module.exports = User;
