const CreatePayment = require('./CreatePayment');
const UpdatePayment = require('./UpdatePayment');
const DeletePayment = require('./DeletePayment');
const FindPayment = require('./FindPayment');
const FindOnePayment = require('./FindOnePayment');

module.exports = container => ({
  create: new CreatePayment(container),
  update: new UpdatePayment(container),
  remove: new DeletePayment(container),
  find: new FindPayment(container),
  findOne: new FindOnePayment(container),
});
