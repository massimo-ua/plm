const Status = require ('http-status');

module.exports = () => (req, res) => {
  res.status (Status.NOT_FOUND);
  res.format ({
    default: () => {
      res.json ({
        type: 'NotFoundError',
        message: 'Requested resource not found',
      });
    },
  });
};
