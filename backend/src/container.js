const {
  createContainer,
  asValue,
  asFunction,
  asClass,
} = require('awilix');
const config = require('@config');
const logger = require('@core/logger');
const { httpRequestsLogger } = require('@core/middleware');
const { Server, AppRouter, errorHandler } = require('@core/http');
const Application = require('@app/Application');
const db = require('@core/database');

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
});

module.exports = container;
