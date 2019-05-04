const User = require ('./user.model');

module.exports = container => {
  return container.db.registerModel (User (container));
};
