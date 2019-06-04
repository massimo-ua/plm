const modelsCreator = require ('./models');
const serviceCreator = require ('./services');

module.exports = container => ({
  register () {
    container.register ('TeamModel', modelsCreator, ['db']);
    container.register ('Teams', serviceCreator, ['TeamModel']);
  },
});
