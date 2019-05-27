const {GraphQLObjectType} = require ('graphql');
const {UserQuery} = require ('./users');
const {CategoryQuery} = require ('./categories');
const {CurrencyQuery} = require ('./currencies');
const {AccountQuery} = require ('./accounts');
const {TransactionQuery} = require ('./transactions');
const {PlanQuery} = require ('./plans');

module.exports = container =>
  new GraphQLObjectType ({
    name: 'Query',
    fields: {
      ...UserQuery (container),
      ...CategoryQuery (container),
      ...AccountQuery (container),
      ...CurrencyQuery (container),
      ...TransactionQuery (container),
      ...PlanQuery (container),
    },
  });
