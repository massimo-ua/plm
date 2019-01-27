const { User, Team } = require('./models');
const serviceCreator = require('./service');
const helpers = require('./helpers');

module.exports = (core) => {
  const { db, utils } = core;
  db.registerModel(Team);
  db.registerModel(User(utils));
  const { User: UserModel } = db.models;
  const api = serviceCreator(UserModel, { ...core.utils, ...helpers });
  core.registerAPI({
    namespace: 'Users',
    api,
  });
};
