const modelsCreator = require ('./models');
const serviceCreator = require ('./services');

module.exports = {
  register (container) {
    container.register ('TransactionModel', modelsCreator, [
      'db',
      'AccountModel',
      'TeamModel',
      'PaymentModel',
    ]);
    container.register ('Transactions', serviceCreator, [
      'TransactionModel',
      'logger',
      'events',
      'Payments',
      'Accounts',
      'db',
    ]);
  },
};
