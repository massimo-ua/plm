const Transaction = require('./transaction.model');

module.exports = db => {
  db.registerModel(Transaction);
};
