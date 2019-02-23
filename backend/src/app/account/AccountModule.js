const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = (core) => {
  const { db } = core;
  modelsCreator(db);
  const { Account } = db.models;
  const api = serviceCreator(Account);
  core.registerAPI({
    namespace: 'Accounts',
    api,
  });
};
