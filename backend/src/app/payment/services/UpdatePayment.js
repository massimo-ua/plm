/* eslint-disable import/no-unresolved */
const { Update } = require('@core/services');

class UpdatePayment extends Update {
    constructor({ PaymentModel }) {
        super(PaymentModel);
    }
}

module.exports = UpdatePayment;
