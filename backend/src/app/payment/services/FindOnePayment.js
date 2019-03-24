/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');

class FindOnePayment extends FindOne {
    constructor({ PaymentModel }) {
        super(PaymentModel);
    }
}

module.exports = FindOnePayment;
