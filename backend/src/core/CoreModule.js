const container = require('./container');
const logger = require('./logger');
const db = require('./database');
const crypto = require('./crypto');
const jwt = require('./jwt');
const {
  HttpRequestsLogger,
  AppHttpServer,
  Router,
  ErrorHandler,
  notFoundHandler,
} = require('./http');
const config = require('../../config');
const utils = require('./utils');
const Auth = require('./auth');

container.register('config', config);
container.register('crypto', crypto);
container.register('notFoundHandler', notFoundHandler);
container.register('utils', utils);
container.register('auth', Auth);
container.register('errorHandler', ErrorHandler, ['logger']);
container.register('logger', logger, ['config']);
container.register('jwt', jwt, ['config']);
container.register('httpRequestsLogger', HttpRequestsLogger, ['logger']);
container.register('db', db, ['config', 'logger']);
container.register('router', Router, ['httpRequestsLogger', 'errorHandler', 'notFoundHandler']);
container.register('server', AppHttpServer, ['config', 'router', 'logger']);

module.exports = container;

