const Category = require('./category.model');

module.exports = (db) => {
  db.registerModel(Category);
};
