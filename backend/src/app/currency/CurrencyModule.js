const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('CurrencyModel', modelsCreator, ['db']);
    container.register('Currencies', serviceCreator, ['db', 'CurrencyModel']);
  },
};
