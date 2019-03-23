const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    const { db } = core;
    modelsCreator(db);
    const { Transaction } = db.models;
    container.register('Transactions', serviceCreator(Transaction));
  },
};
