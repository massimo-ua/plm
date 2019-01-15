const GraphQLModule = require('./graphql');
const UsersModule = require('./users');

module.exports = ({ core }) => {
  UsersModule(core);
  GraphQLModule(core);
};
