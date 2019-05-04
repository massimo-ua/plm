const isAdmin = ctx => {
  const {user = {}} = ctx;
  if (!user.isAdmin) {
    throw new Error ('Not authorized');
  }
};

const loggedIn = ctx => {
  const {user, isLoginRequired = true} = ctx;
  const pass = isLoginRequired ? !!user : true;
  if (!pass) {
    throw new Error ('Authentification required');
  }
};

module.exports = {
  isAdmin,
  loggedIn,
};
