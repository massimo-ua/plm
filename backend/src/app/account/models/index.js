const Model = require('./account.model');

module.exports = container => {
  return container.db.registerModel(Model(container));
};
