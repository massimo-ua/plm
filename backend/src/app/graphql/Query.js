const { GraphQLObjectType } = require('graphql');
const UsersSchema = require('./users/QuerySchema');
const CategoriesSchema = require('./categories/QuerySchema');
const CurrenciesSchema = require('./currencies/QuerySchema');
const { AccountQuery } = require('./accounts');
const { TransactionQuery } = require('./transactions');

module.exports = container => new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...UsersSchema(container),
    ...CategoriesSchema(container),
    ...AccountQuery(container),
    ...CurrenciesSchema(container),
    ...TransactionQuery(container),
  },
});
