/* eslint-disable import/no-unresolved */
const { Create } = require('@core/services');

class CreateCurrency extends Create {
  constructor({ CurrencyModel }) {
    super(CurrencyModel);
  }

  execute({ args }) {
    return this.model.create(args);
  }
}

module.exports = CreateCurrency;
