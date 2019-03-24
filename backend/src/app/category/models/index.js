const Category = require('./category.model');

module.exports = container => {
  return container.db.registerModel(Category(container));
};
