const jsonwebtoken = require('jsonwebtoken');

module.exports = config => ({
  sign: ({ id }) => jsonwebtoken.sign(
    { id },
    config.jwt.secret,
    { expiresIn: '7d' },
  ),
  verify: async (token) => {
    const decodedToken = await jsonwebtoken.verify(token, config.jwt.secret);
    return decodedToken;
  },
});
