const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('TeamModel', modelsCreator, ['db']);
    container.register('Teams', serviceCreator, ['TeamModel']);
  },
};
