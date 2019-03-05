const Payment = require('./payment.model');

module.exports = (db) => {
  db.registerModel(Payment);
};
