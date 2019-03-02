/* eslint-disable import/no-unresolved */
const { Find } = require('@core/services');

class FindCurrency extends Find {
  execute({ options = {} }) {
    return this.model.findAll({ ...this.defaultOptions, ...options });
  }
}

module.exports = FindCurrency;
