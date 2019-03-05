const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = (core) => {
  const { db } = core;
  modelsCreator(db);
  const { Transaction } = db.models;
  const api = serviceCreator(Transaction);
  core.registerAPI({
    namespace: 'Transactions',
    api,
  });
};
