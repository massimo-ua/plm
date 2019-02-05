function comparePassword(password, user, compareFn) {
  return user ? compareFn(password, user.password) : false;
}

module.exports = comparePassword;
