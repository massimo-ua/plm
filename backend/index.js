/* eslint-disable import/no-unresolved */
require('module-alias/register');
const app = require('./src/app');

const { logger } = app;

app
  .start()
  .catch((error) => {
    logger.error(error.stack);
    process.exit(1);
  });
