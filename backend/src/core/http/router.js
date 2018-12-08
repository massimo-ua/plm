const { Router } = require('express');
// const compression = require('compression');

module.exports = ({ httpRequestsLogger }) => {
  const router = Router();
  router.use(httpRequestsLogger);
  router.get('/', (req, res, next) => {
    res.json('OK');
  });
  return router;
};
