const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = ({ CategoryType, resolver }) => ({
  create: {
    type: CategoryType,
    args: {
      code: {
        type: GraphQLNonNull(GraphQLInt),
        description: 'Currency code',
      },
      shortName: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Currency short name',
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Currency name',
      },
    },
    resolve: resolver,
  },
});
