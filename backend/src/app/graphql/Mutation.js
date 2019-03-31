const { GraphQLObjectType } = require('graphql');
const { UserMutation } = require('./users');
const { CategoryMutation } = require('./categories');
const { CurrencyMutation } = require('./currencies');
const { AccountMutation } = require('./accounts');
const { TransactionMutation } = require('./transactions');
const { PaymentMutation } = require('./payments');

module.exports = container => new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...UserMutation(container),
    ...CategoryMutation(container),
    ...CurrencyMutation(container),
    ...AccountMutation(container),
    ...TransactionMutation(container),
    ...PaymentMutation(container),
  },
});
