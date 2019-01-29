const { Category } = require('./models');
// const serviceCreator = require('./service');

module.exports = (core) => {
  const { db } = core;
  db.registerModel(Category);
  const { Category: CategoryModel } = db.models;
  // const api = serviceCreator(UserModel, { ...core.utils, ...helpers });
  core.registerAPI({
    namespace: 'Categories',
    api: {},
  });
};
