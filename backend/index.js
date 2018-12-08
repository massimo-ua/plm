require('module-alias/register');
const container = require('./src/container');

const app = container.resolve('app');
const logger = container.resolve('logger');

app
  .start()
  .catch((error) => {
    logger.error(error.stack);
    process.exit(1);
  });
