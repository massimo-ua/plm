const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

module.exports = ({ Type, resolve }) => ({
  show: {
    type: Type,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Record id',
      },
    },
    resolve,
  },
});
