const Currency = require('./currency.model');
const CurrencyRate = require('./rate.model');

const factory = model => container => container.db.registerModel(model(container)); 

module.exports = {
  Currency: factory(Currency),
  CurrencyRate: factory(CurrencyRate),
};
