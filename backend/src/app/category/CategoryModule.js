const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    container.register('CategoryModel', modelsCreator, ['db', 'TeamModel']);
    container.register('Categories', serviceCreator, ['CategoryModel']);
  },
};
