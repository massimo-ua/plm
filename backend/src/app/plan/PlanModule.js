const modelsCreator = require ('./models');
const serviceCreator = require ('./services');

module.exports = container => ({
  register () {
    container.register ('PlanModel', modelsCreator, [
      'db',
      'AccountModel',
      'TeamModel',
    ]);
    container.register ('Plans', serviceCreator, [
      'db',
      'PlanModel',
      'Accounts',
    ]);
  },
});
