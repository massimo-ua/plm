const GraphQLModule = require('../app/graphql');
const UsersModule = require('./users');
const AuthModule = require('./auth');

module.exports = ({ core }) => {
  AuthModule(core);
  UsersModule(core);
  GraphQLModule(core);
};
