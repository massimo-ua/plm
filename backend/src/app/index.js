/* eslint-disable import/no-unresolved */
const core = require('@core');
const Application = require('./Application');
const GraphQLModule = require('./graphql');
const CategoryModule = require('./category');
const CurrencyModule = require('./currency');

core.loadModule(CategoryModule);
core.loadModule(CurrencyModule);
core.loadModule(GraphQLModule);

module.exports = new Application(core);
