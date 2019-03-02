const Currency = require('./currency.model');

module.exports = (db) => {
  db.registerModel(Currency);
};
