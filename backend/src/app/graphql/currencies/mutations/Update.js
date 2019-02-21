const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = ({ CategoryType, resolver }) => ({
  update: {
    type: CategoryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
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
        description: 'Currency name',
      },
    },
    resolve: resolver,
  },
});
