const authService = require('./AuthService');

module.exports = (core) => {
  const api = authService;
  core.registerAPI({
    namespace: 'Auth',
    api,
  });
};
