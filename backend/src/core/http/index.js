const Server = require('./Server');
const AppRouter = require('./router');
const errorHandler = require('./errorHandler');
const notFoundHandler = require('./notFoundHandler');

module.exports = {
  Server,
  AppRouter,
  errorHandler,
  notFoundHandler,
};
