const { GraphQLObjectType } = require('graphql');
const UserMutation = require('./users/MutationSchema');
const CategoryMutation = require('./categories/MutationSchema');
const CurrencyMutation = require('./currencies/MutationSchema');
const AccountMutation = require('./accounts/MutationSchema');
const { TransactionMutation } = require('./transactions');

module.exports = container => new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...UserMutation(container),
    ...CategoryMutation(container),
    ...CurrencyMutation(container),
    ...AccountMutation(container),
    ...TransactionMutation(container),
  },
});
