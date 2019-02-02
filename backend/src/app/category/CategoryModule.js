const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = (core) => {
  const { db } = core;
  modelsCreator(db);
  const { Category } = db.models;
  const api = serviceCreator(Category);
  core.registerAPI({
    namespace: 'Categories',
    api,
  });
};
