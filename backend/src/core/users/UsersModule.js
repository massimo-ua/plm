const { User } = require('./models');
const serviceCreator = require('./services');
const helpers = require('./helpers');

module.exports = (core) => {
  const { db, utils } = core;
  db.registerModel(User(utils));
  const { User: UserModel } = db.models;
  const api = serviceCreator(UserModel, { ...core.utils, ...helpers });
  core.registerAPI({
    namespace: 'Users',
    api,
  });
};
