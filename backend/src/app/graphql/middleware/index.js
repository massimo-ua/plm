const jwtAuth = require('./jwtAuth');

const auth = ({ jwt, Users: service }) => {
  return jwtAuth({ jwt, service });
};

module.exports = {
  auth,
};
