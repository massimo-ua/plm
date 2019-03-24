/* eslint-disable import/no-unresolved */
const { Create } = require('@core/services');

class CreateTransaction extends Create {
    constructor({ TransactionModel }) {
        super(TransactionModel);
    }
}

module.exports = CreateTransaction;
