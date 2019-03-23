const container = require('./container');
const logger = require('./logger');
const db = require('./database');
const crypto = require('./crypto');
const jwt = require('./jwt');
const { appRouter, server } = require('./http');
const CoreModule = require('./CoreModule');
const TeamsModule = require('./teams');
const UsersModule = require('./users');
const AuthModule = require('./auth');
container.register('logger', logger);
container.register('db', db);
container.register('crypto', crypto);
container.register('jwt', jwt);
container.register('appRouter', appRouter);
container.register('server', server);

const core = new CoreModule(container);

core.loadModule(AuthModule);
core.loadModule(TeamsModule);
core.loadModule(UsersModule);

module.exports = core;
