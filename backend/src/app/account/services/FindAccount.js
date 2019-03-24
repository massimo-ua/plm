/* eslint-disable import/no-unresolved */
const { Find } = require('@core/services');

class FindAccount extends Find {
    constructor({ AccountModel }) {
        super(AccountModel);
    }
}

module.exports = FindAccount;
