const {
  createContainer,
  asValue,
  asFunction,
  asClass,
} = require('awilix');
const config = require('@config');
const logger = require('@core/logger');
const { httpRequestsLogger } = require('@core/middleware');
const { Server, router } = require('@core/http');
const Application = require('@app/Application');

const container = createContainer();

container.register({
  config: asValue(config),
  logger: asFunction(logger).singleton(),
  server: asClass(Server).singleton(),
  app: asClass(Application).singleton(),
  router: asFunction(router).singleton(),
  httpRequestsLogger: asFunction(httpRequestsLogger).singleton(),
});

module.exports = container;
