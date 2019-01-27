/* eslint-disable import/no-unresolved */
const config = require('@config');
const logger = require('../logger');
const { httpRequestsLogger } = require('../middleware');
const AppHttpServer = require('./Server');
const Router = require('./router');
const errorHandler = require('./errorHandler')(logger);
const notFoundHandler = require('./notFoundHandler');

const appRouter = new Router({
  httpRequestsLogger,
  errorHandler,
  notFoundHandler,
});

const server = new AppHttpServer({
  config,
  appRouter,
  logger,
});


module.exports = {
  server,
  appRouter,
};
