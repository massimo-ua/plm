/* eslint-disable import/no-unresolved */
const { Update } = require('@core/services');

class UpdateTransaction extends Update {
  constructor({ TransactionModel }) {
    super(TransactionModel);
  }
}

module.exports = UpdateTransaction;
