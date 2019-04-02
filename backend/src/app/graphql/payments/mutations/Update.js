const {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID,
  } = require('graphql');
  
  module.exports = (Payment, resolve) => ({
    update: {
      type: Payment,
      args: {
        id: {
          type: GraphQLID,
          description: 'Payment id',
        },
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