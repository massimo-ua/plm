const {
  Currency,
  CurrencyRate,
} = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('CurrencyModel', Currency, ['db']);
    container.register('CurrencyRateModel', CurrencyRate, ['db']);
    container.register('Currencies', serviceCreator, ['db', 'CurrencyModel', 'CurrencyRateModel', 'Accounts']);
  },
};
