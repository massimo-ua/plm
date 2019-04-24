const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('PaymentModel', modelsCreator, ['db', 'CategoryModel', 'TransactionModel', 'TeamModel']);
    container.register('Payments', serviceCreator, ['PaymentModel', 'Transactions', 'Accounts', 'db', 'logger']);
  },
};
