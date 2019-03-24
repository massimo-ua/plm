/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');

class FindOneAccount extends FindOne {
    constructor({ AccountModel }) {
        super(AccountModel);
    }
}

module.exports = FindOneAccount;
