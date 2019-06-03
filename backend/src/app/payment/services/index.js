const CreatePayment = require('./CreatePayment');
const UpdatePayment = require('./UpdatePayment');
const FindPayment = require('./FindPayment');
const FindOnePayment = require('./FindOnePayment');
const RollbackPayment = require('./RollbackPayment');
const PaymentsTotalAmount = require('./PaymentsTotalAmount');

module.exports = container => ({
  create: new CreatePayment(container),
  update: new UpdatePayment(container),
  rollback: new RollbackPayment(container),
  find: new FindPayment(container),
  findOne: new FindOnePayment(container),
  totalAmount: new PaymentsTotalAmount(container),
});
