
const CoreModule = require('./CoreModule');
const TeamsModule = require('./teams');
const UsersModule = require('./users');
const AuthModule = require('./auth');


const core = new CoreModule(container);

core.loadModule(AuthModule);
core.loadModule(TeamsModule);
core.loadModule(UsersModule);

module.exports = core;
