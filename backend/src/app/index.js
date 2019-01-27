/* eslint-disable import/no-unresolved */
const core = require('@core');
const Application = require('./Application');
const GraphQLModule = require('./graphql');

core.loadModule(GraphQLModule);

module.exports = new Application(core);
