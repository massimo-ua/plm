const TransactionRollbackHandler = require('./TransactionRollback');

module.exports = (container) => {
  TransactionRollbackHandler(container);
};
