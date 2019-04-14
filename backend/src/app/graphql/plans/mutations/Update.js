const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

module.exports = (Plan, resolve) => ({
  update: {
    type: Plan,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Plan id',
      },
      name: {
        type: GraphQLString,
        description: 'Plan name',
      },
      startDate: {
        type: GraphQLDate,
        description: 'Plan start date',
      },
      endDate: {
        type: GraphQLDate,
        description: 'Plan end date',
      },
      targetAmount: {
        type: GraphQLInt,
        description: 'Plan target amount',
      },
    },
    resolve,
  },
});
