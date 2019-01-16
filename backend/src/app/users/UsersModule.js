const { User } = require('./models');
const serviceCreator = require('./service');

const registerModels = (db) => {
  db.registerModel('user', User);
};

module.exports = (core) => {
  registerModels(core.db);

  const { user: UserModel } = core.db.models;
  const api = serviceCreator(UserModel);

  core.registerAPI({
    namespace: 'Users',
    api,
  });
};
