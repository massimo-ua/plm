const morgan = require('morgan');
const LoggerStreamAdapter = require('../logger/loggerStreamAdapter');

module.exports = ({logger}) => morgan('dev', {
  stream: LoggerStreamAdapter.toStream(logger),
});
