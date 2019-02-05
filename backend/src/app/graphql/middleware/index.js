const jwtAuth = require('./jwtAuth');

const auth = (core) => {
  const { jwt } = core.utils;
  const { Users: service } = core.modules;
  return jwtAuth({ jwt, service });
};

module.exports = {
  auth,
};
