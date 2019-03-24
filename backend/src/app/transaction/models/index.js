const Transaction = require('./transaction.model');

module.exports = container => {
  return container.db.registerModel(Transaction(container));
};
