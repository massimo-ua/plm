const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('PaymentModel', modelsCreator, ['db', 'CategoryModel', 'TeamModel']);
    container.register('Payments', serviceCreator, ['PaymentModel', 'logger']);
  },
};
