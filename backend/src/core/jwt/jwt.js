const jsonwebtoken = require('jsonwebtoken');

module.exports = ({ config }) => ({
  sign: ({ id }) => jsonwebtoken.sign(
    { id },
    config.jwt.secret,
    { expiresIn: '7d' },
  ),
});
