const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('PlanModel', modelsCreator, ['db', 'AccountModel', 'TeamModel'])
    container.register('Plan', serviceCreator, ['db', 'date', 'PlanModel', 'Accounts']);
  },
};
