/* eslint-disable import/no-unresolved */
const { Find } = require('@core/services');

class FindTransaction extends Find {
  constructor({ TransactionModel }) {
    super(TransactionModel);
  }
}

module.exports = FindTransaction;
