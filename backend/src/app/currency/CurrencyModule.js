const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    const { db } = container;
    modelsCreator(db);
    const { Currency } = db.models;
    container.register('Currencies', serviceCreator(Currency, db));
  },
};
