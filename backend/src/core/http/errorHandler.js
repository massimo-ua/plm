const Status = require('http-status');

module.exports = ({ logger }) => (err, req, res, next) => { // eslint-disable-line no-unused-vars
  logger.error(err);
  res
    .status(Status.INTERNAL_SERVER_ERROR)
    .json({
      type: 'InternalServerError',
      message: 'The server failed to handle this request',
    });
};
