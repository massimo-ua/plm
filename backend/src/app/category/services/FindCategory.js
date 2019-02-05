/* eslint-disable import/no-unresolved */
const { Find } = require('@core/services');

class FindCategory extends Find {
  constructor(model) {
    super(model, {
      include: ['team'],
    });
  }
}

module.exports = FindCategory;
