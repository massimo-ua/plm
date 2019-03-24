/* eslint-disable import/no-unresolved */
const { Create } = require('@core/services');

class CreateAccount extends Create {
    constructor({ AccountModel }) {
        super(AccountModel);
    }
}

module.exports = CreateAccount;
