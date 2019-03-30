class SetExchangeRate {
  
    constructor({ CurrencyRateModel }) {
      this.model = CurrencyRateModel;
    }
  
    async execute({ args: { currencyId, effectiveDate, exchangeRate } }) {
        return this.model.create({
            currencyId,
            effectiveDate,
            exchangeRate,
        });
    }
  }
  
  module.exports = SetExchangeRate;
  