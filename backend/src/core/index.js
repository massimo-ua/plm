const logger = require('./logger');
const db = require('./database');
const crypto = require('./crypto');
const jwt = require('./jwt');
const { appRouter, server } = require('./http');
const CoreModule = require('./CoreModule');
const TeamsModule = require('./teams');
const UsersModule = require('./users');
const AuthModule = require('./auth');

const core = new CoreModule({
  logger,
  appRouter,
  db,
  crypto,
  jwt,
  server,
});

core.loadModule(AuthModule);
core.loadModule(TeamsModule);
core.loadModule(UsersModule);

module.exports = core;
