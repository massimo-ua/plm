const {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID,
  } = require('graphql');
  
  module.exports = (Payment, resolve) => ({
    create: {
      type: Payment,
      args: {
        transactionId: {
            type: GraphQLNonNull(GraphQLID),
            description: 'Payment transaction id',
        },
        categoryId: {
            type: GraphQLNonNull(GraphQLID),
            description: 'Payment category id',
        },
        amount: {
            type: GraphQLNonNull(GraphQLInt),
            description: 'Payment amount',
        },
      },
      resolve,
    },
  });
  