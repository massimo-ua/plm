const jwt = require('express-jwt');

module.exports = ({ config }) => jwt({
  secret: config.jwt.secret,
  credentialsRequired: false,
});
