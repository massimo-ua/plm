const CreatePayment = require('./CreatePayment');
const UpdatePayment = require('./UpdatePayment');
const DeletePayment = require('./DeletePayment');
const FindPayment = require('./FindPayment');
const FindOnePayment = require('./FindOnePayment');

module.exports = (...args) => ({
  create: new CreatePayment(...args),
  update: new UpdatePayment(...args),
  remove: new DeletePayment(...args),
  find: new FindPayment(...args),
  findOne: new FindOnePayment(...args),
});
