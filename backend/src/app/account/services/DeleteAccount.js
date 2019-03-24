/* eslint-disable import/no-unresolved */
const { Delete } = require('@core/services');

class DeleteAccount extends Delete {
    constructor({ AccountModel }) {
        super(AccountModel);
    }
}

module.exports = DeleteAccount;
