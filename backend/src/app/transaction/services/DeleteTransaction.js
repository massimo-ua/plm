/* eslint-disable import/no-unresolved */
const { Delete } = require('@core/services');

class DeleteTransaction extends Delete {
    constructor({ TransactionModel }) {
        super(TransactionModel);
    }
}

module.exports = DeleteTransaction;
