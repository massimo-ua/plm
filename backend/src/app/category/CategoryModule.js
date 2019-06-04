const modelsCreator = require ('./models');
const serviceCreator = require ('./services');

module.exports = container => ({
  register () {
    container.register ('CategoryModel', modelsCreator, ['db', 'TeamModel']);
    container.register ('Categories', serviceCreator, ['CategoryModel']);
  },
});
