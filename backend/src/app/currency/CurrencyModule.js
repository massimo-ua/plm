const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = (core) => {
  const { db } = core;
  modelsCreator(db);
  const { Currency } = db.models;
  const api = serviceCreator(Currency, db);
  core.registerAPI({
    namespace: 'Currencies',
    api,
  });
};
