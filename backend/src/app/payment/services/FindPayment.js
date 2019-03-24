/* eslint-disable import/no-unresolved */
const { Find } = require('@core/services');

class FindPayment extends Find {
    constructor({ PaymentModel }) {
        super(PaymentModel);
    }
}

module.exports = FindPayment;
