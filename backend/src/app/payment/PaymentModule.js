const modelsCreator = require('./models');
const serviceCreator = require('./services');
const eventHandlers = require('./handlers');

module.exports = {
  register(container) {
    container.register('PaymentModel', modelsCreator, ['db', 'CategoryModel', 'TransactionModel', 'TeamModel']);
    container.register('Payments', serviceCreator, ['PaymentModel', 'Transactions', 'Accounts', 'db', 'logger']);
  },
  run(container) {
    eventHandlers(container);
  },
};
