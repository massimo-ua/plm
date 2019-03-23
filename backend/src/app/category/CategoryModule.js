const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    const { db } = container;
    modelsCreator(db);
    const { Category } = db.models;
    container.register('Categories', serviceCreator(Category));
  },
};
