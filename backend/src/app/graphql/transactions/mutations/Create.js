const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

module.exports = ({ Transaction, resolve }) => ({
  create: {
    type: Transaction,
    args: {
      accountId: {
        type: GraphQLNonNull(GraphQLID),
        description: 'Transaction account id',
      },
      actualDate: {
        type: GraphQLNonNull(GraphQLDate),
        description: 'Transaction date',
      },
      type: {
        type: GraphQLNonNull(GraphQLString),
        description: 'Transaction type',
      },
      notes: {
        type: GraphQLString,
        description: 'Transaction notes',
      },
    },
    resolve,
  },
});
