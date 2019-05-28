const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require ('graphql');

const {GraphQLDate} = require ('graphql-iso-date');

const TransactionPaymentInput = new GraphQLInputObjectType ({
  name: 'TransactionPaymentInput',
  fields: {
    categoryId: {
      type: GraphQLNonNull (GraphQLID),
      description: "Payment's category id",
    },
    amount: {
      type: GraphQLNonNull (GraphQLInt),
      description: 'Payment amount',
    },
  },
});

const TransactionInput = new GraphQLInputObjectType ({
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
    actualDate: {
      type: GraphQLNonNull (GraphQLDate),
      description: 'Transaction date',
    },
    notes: {
      type: GraphQLString,
      description: 'Transaction notes',
    },
    payments: {
      type: GraphQLNonNull (
        GraphQLList (GraphQLNonNull (TransactionPaymentInput))
      ),
      description: 'Transaction payments',
    },
  },
  description: 'Create transaction input',
});

module.exports = ({Transaction, resolve}) => ({
  create: {
    type: Transaction,
    args: {
      transaction: {
        type: TransactionInput,
      },
    },
    resolve,
  },
});
