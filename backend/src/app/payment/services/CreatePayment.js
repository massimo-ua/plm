/* eslint-disable import/no-unresolved */
const { Create } = require('@core/services');

class CreatePayment extends Create {
    constructor({ PaymentModel }) {
        super(PaymentModel);
    }
}

module.exports = CreatePayment;
