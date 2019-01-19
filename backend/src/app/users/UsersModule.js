const { User, Team } = require('./models');
const serviceCreator = require('./service');
const helpers = require('./helpers');

const registerModels = (db) => {
  db.registerModel(Team);
  db.registerModel(User);
};

module.exports = (core) => {
  registerModels(core.db);
  const { User: UserModel } = core.db.models;
  const api = serviceCreator(UserModel, { ...core.utils, ...helpers });
  core.registerAPI({
    namespace: 'Users',
    api,
  });
};
