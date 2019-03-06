const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = (core) => {
  const { db } = core;
  modelsCreator(db);
  const { Payment } = db.models;
  const api = serviceCreator(Payment);
  core.registerAPI({
    namespace: 'Payments',
    api,
  });
};
