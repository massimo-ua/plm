const Status = require ('http-status');

module.exports = ({logger}) => (err, req, res) => {
  logger.error (err);
  res.status (Status.INTERNAL_SERVER_ERROR).json ({
    type: 'InternalServerError',
    message: 'The server failed to handle this request',
  });
};
