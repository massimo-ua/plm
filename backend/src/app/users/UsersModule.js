const { User } = require('./models');
const serviceCreator = require('./service');

const registerModels = (db) => {
  db.registerModel('Users', User);
};

module.exports = (core) => {
  registerModels(core.db);

  const { Users: UserModel } = core.db.models;
  const api = serviceCreator(UserModel);

  core.registerAPI({
    namespace: 'Users',
    api,
  });
};
