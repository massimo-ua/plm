
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

const middleware = ({ jwt, service: { findOne } }) => async (req, res, next) => {
  try {
    const token = extractToken(req.headers.authorization);
    const { id, exp } = await jwt.verify(token);
    validateTokenExpiration(exp);
    const user = await findOne.execute({
      args: { id },
      options: {
        attributes: ['id', 'isAdmin', 'teamId'],
      },
    });
    req.user = user;
  } catch (error) {
    req.user = null;
  }
  next();
};

module.exports = middleware;
