const Account = require('./account.model');

module.exports = (db) => {
  db.registerModel(Account);
};
