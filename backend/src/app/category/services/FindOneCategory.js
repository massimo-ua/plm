/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');

class FindOneCategory extends FindOne {
  constructor(model) {
    super(model, {
      include: ['team'],
    });
  }
}

module.exports = FindOneCategory;
