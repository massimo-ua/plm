/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');

class FindOneTransaction extends FindOne {
    constructor({ TransactionModel }) {
        super(TransactionModel);
    }
}

module.exports = FindOneTransaction;
