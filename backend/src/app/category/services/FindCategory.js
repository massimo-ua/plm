/* eslint-disable import/no-unresolved */
const { Find } = require('@core/services');

class FindCategory extends Find {
  constructor({ CategoryModel }) {
    super(CategoryModel);
  }
}

module.exports = FindCategory;
