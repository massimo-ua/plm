const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    const { db } = container;
    modelsCreator(db);
    const { Account } = db.models;
    container.register('Accounts', serviceCreator(Account));
  },
};
