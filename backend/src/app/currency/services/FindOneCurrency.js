/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');
const { mergeDeep } = require('@core/utils');

class FindOneCurrency extends FindOne {
  constructor({ CurrencyModel }) {
    super(CurrencyModel);
  }
  execute({ args: { id } = {}, options = {} }) {
    return this.model.findOne(
      mergeDeep(
        { ...this.defaultOptions, ...options },
        { where: { id } },
      ),
    );
  }
}

module.exports = FindOneCurrency;
