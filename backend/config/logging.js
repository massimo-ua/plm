const path = require('path');

const logPath = path.join(__dirname, '../logs/development.log');
module.exports = {
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: logPath },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'debug' },
  },
};
