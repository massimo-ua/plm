/* eslint-disable import/no-unresolved */
const { Update } = require('@core/services');

class UpdateAccount extends Update {
    constructor({ AccountModel }) {
        super(AccountModel);
    }
}

module.exports = UpdateAccount;
