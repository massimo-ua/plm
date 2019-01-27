
const extractToken = (token) => {
  if (/\s/g.test(token)) {
    return token.split(' ')[1];
  }
  return token;
};

const validateTokenExpiration = (exp) => {
  const now = Date.now().valueOf() / 1000;
  if (exp === undefined || exp < now) {
    throw new Error('Token expired');
  }
};

const middleware = ({ jwt, service }) => async (req, res, next) => {
  try {
    const token = extractToken(req.headers.authorization);
    const { id, exp } = await jwt.verify(token);
    validateTokenExpiration(exp);
    const user = await service.findById({ id }, {
      attributes: ['id', 'isAdmin'],
    });
    req.user = user;
  } catch (error) {
    req.user = null;
  }
  next();
};

module.exports = middleware;
