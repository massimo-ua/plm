const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Currency',
  description: 'Currency schema',
  fields: {
    id: {
      type: GraphQLID,
      description: 'Currency id',
    },
    code: {
      type: GraphQLInt,
      description: 'Currency code',
    },
    shortName: {
      type: GraphQLString,
      description: 'Currency short name',
    },
    name: {
      type: GraphQLString,
      description: 'Currency full name',
    },
    home: {
      type: GraphQLBoolean,
      description: 'Home currency',
    },
    rate: {
      type: GraphQLInt,
      description: 'Currency exchange rate',
    },
  },
});
