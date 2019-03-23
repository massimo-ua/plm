const container = require('../core');
const Application = require('./Application');
const GraphQLModule = require('./graphql');
const CategoryModule = require('./category');
const CurrencyModule = require('./currency');
const AccountModel = require('./account');
const TransactionModule = require('./transaction');
const PaymentModule = require('./payment');

core.loadModule(CategoryModule);
core.loadModule(CurrencyModule);
core.loadModule(AccountModel);
core.loadModule(TransactionModule);
core.loadModule(PaymentModule);
core.loadModule(GraphQLModule);

module.exports = new Application(core);
