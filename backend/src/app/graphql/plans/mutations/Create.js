const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

module.exports = ({ Plan, resolve }) => ({
  create: {
    type: Plan,
    args: {
      currencyId: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Plan account id',
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Plan name',
      },
      startDate: {
        type: GraphQLNonNull(GraphQLDate),
        description: 'Plan start date',
      },
      endDate: {
        type: GraphQLNonNull(GraphQLDate),
        description: 'Plan end date',
      },
      targetAmount: {
        type: GraphQLNonNull(GraphQLInt),
        description: 'Plan target amount',
      },
    },
    resolve,
  },
});
