const modelsCreator = require ('./models');
const serviceCreator = require ('./services');
const handlers = require('./handlers');

module.exports = container => ({
  register () {
    container.register ('AccountModel', modelsCreator, [
      'db',
      'TeamModel',
      'CurrencyModel',
    ]);
    container.register ('Accounts', serviceCreator, ['AccountModel']);
  },
  run() {
    handlers(container);
  }
});
