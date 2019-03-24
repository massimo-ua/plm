const Currency = require('./currency.model');

module.exports = container => {
  return container.db.registerModel(Currency(container));
};
