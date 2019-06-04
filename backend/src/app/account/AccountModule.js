const modelsCreator = require ('./models');
const serviceCreator = require ('./services');

module.exports = container => ({
  register () {
    container.register ('AccountModel', modelsCreator, [
      'db',
      'TeamModel',
      'CurrencyModel',
    ]);
    container.register ('Accounts', serviceCreator, ['AccountModel']);
  },
});
