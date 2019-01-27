const logger = require('../logger');
const httpRequestsLogger = require('./httpRequestsLogger')(logger);

module.exports = {
  httpRequestsLogger,
};
