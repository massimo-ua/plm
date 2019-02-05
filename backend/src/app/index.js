/* eslint-disable import/no-unresolved */
const core = require('@core');
const Application = require('./Application');
const GraphQLModule = require('./graphql');
const CategoryModule = require('./category');

core.loadModule(CategoryModule);
core.loadModule(GraphQLModule);

module.exports = new Application(core);
