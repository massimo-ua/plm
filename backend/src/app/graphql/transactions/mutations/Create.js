const {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require('graphql');

const {
  GraphQLDate,
} = require('graphql-iso-date');

const TransactionInput = new GraphQLInputObjectType({
  name: 'TransactionInput',
  fields: {
    srcAccountId: {
      type: GraphQLID,
      description: 'Source account id',
    },
    dstAccountId: {
      type: GraphQLID,
      description: 'Destination account id',
    },
    total: {
      type: GraphQLInt,
      description: 'Total transaction amount'
    },
    actualDate: {
      type: GraphQLNonNull(GraphQLDate),
      description: 'Transaction date',
    },
    notes: {
      type: GraphQLString,
      description: 'Transaction notes',
    },
  },
  description: 'Create transaction input',
});

module.exports = ({ Transaction, resolve }) => ({
  create: {
    type: Transaction,
    args: {
      transaction: {
        type: TransactionInput
      }
    },
    resolve,
  },
});
