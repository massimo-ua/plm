/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');

class FindOneCategory extends FindOne {
  constructor({ CategoryModel }) {
    super(CategoryModel);
  }
}

module.exports = FindOneCategory;
