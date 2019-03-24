/* eslint-disable import/no-unresolved */
const { Delete } = require('@core/services');

class DeletePayment extends Delete {
    constructor({ PaymentModel }) {
        super(PaymentModel);
    }
}

module.exports = DeletePayment;
