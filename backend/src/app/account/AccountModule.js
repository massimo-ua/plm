const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('AccountModel', modelsCreator, ['db', 'TeamModel', 'CurrencyModel'])
    container.register('Accounts', serviceCreator, ['AccountModel']);
  },
};
