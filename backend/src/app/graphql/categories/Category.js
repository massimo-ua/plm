const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');

const Category = new GraphQLObjectType({
  name: 'Category',
  description: 'Category shchema',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'Category id',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'Category name',
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
      description: 'Category type either P(Profit) or L(Loss)',
    },
    isHidden: {
      type: GraphQLBoolean,
      description: 'Is user account active/suspended',
    },
    teamId: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'Team id that category belongs to',
    },
  },
});

module.exports = Category;
