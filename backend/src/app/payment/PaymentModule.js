const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    const { db } = container;
    modelsCreator(db);
    const { Payment } = db.models;
    container.register('Payments', serviceCreator(Payment));
  },
};
