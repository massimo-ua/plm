const Payment = require('./payment.model');

module.exports = container => {
  return container.db.registerModel(Payment(container));
};
