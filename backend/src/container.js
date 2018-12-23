const {
  createContainer,
  asValue,
  asFunction,
  asClass,
} = require('awilix');
const config = require('@config');
const logger = require('@core/logger');
const { httpRequestsLogger } = require('@core/middleware');
const {
  Server,
  AppRouter,
  errorHandler,
  notFoundHandler,
} = require('@core/http');
const Application = require('@app/Application');
const db = require('@core/database');
const Core = require('@core/CoreModule');
const GraphQL = require('@app/graphql');

const container = createContainer();

container.register({
  config: asValue(config),
  logger: asFunction(logger).singleton(),
  server: asClass(Server).singleton(),
  app: asClass(Application).singleton(),
  appRouter: asClass(AppRouter).singleton(),
  httpRequestsLogger: asFunction(httpRequestsLogger).singleton(),
  db: asClass(db).singleton(),
  errorHandler: asFunction(errorHandler).singleton(),
  notFoundHandler: asFunction(notFoundHandler).singleton(),
  core: asClass(Core).singleton(),
  graphQL: asFunction(GraphQL).singleton(),
});

module.exports = container;
