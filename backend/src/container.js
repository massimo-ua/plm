const {
  createContainer,
  asValue,
  asFunction,
  asClass,
} = require('awilix');
const config = require('@config');
const logger = require('@core/logger');
const {
  jwtAuth,
  httpRequestsLogger,
} = require('@core/middleware');
const {
  Server,
  AppRouter,
  errorHandler,
  notFoundHandler,
} = require('@core/http');
const Application = require('@app/Application');
const db = require('@core/database');
const Core = require('@core/CoreModule');
const ModulesLoader = require('@core/ModulesLoader');
const crypto = require('@core/crypto');
const jwt = require('@core/jwt');

const container = createContainer();

container.register({
  config: asValue(config),
  logger: asFunction(logger).singleton(),
  server: asClass(Server).singleton(),
  app: asClass(Application).singleton(),
  appRouter: asClass(AppRouter).singleton(),
  httpRequestsLogger: asFunction(httpRequestsLogger).singleton(),
  jwtAuth: asFunction(jwtAuth).singleton(),
  db: asClass(db).singleton(),
  errorHandler: asFunction(errorHandler).singleton(),
  notFoundHandler: asFunction(notFoundHandler).singleton(),
  crypto: asValue(crypto),
  jwt: asFunction(jwt).singleton(),
  core: asClass(Core).singleton(),
  modulesLoader: asFunction(ModulesLoader).singleton(),
});

module.exports = container;
