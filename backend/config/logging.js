const path = require ('path');

const logPath = path.join (__dirname, '../logs/development.log');
module.exports = {
  appenders: {
    console: {type: 'console'},
    file: {type: 'file', filename: logPath},
    db: {
      type: '@simoware/log4js-pg-appender',
      connectionString: 'postgresql://plm:plm@postgres/plm',
    },
  },
  categories: {
    default: {appenders: ['console', 'file', 'db'], level: 'debug'},
  },
};
