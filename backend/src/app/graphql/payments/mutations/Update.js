const {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID,
  } = require('graphql');
  
  module.exports = (Payment, resolve) => ({
    update: {
      type: Payment,
      args: {
        categoryId: {
          type: GraphQLID,
          description: 'Payment category id',
        },
        amount: {
          type: GraphQLInt,
          description: 'Payment amount',
        },
      },
      resolve,
    },
  });