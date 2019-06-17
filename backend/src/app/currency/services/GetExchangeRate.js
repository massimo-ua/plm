class GetExchangeRate {
  constructor({ CurrencyRateModel, db }) {
    this.model = CurrencyRateModel;
    this.Op = db.Op;
  }

  async execute({ args: { currencyId, effectiveDate = new Date() } }) {
    const record = await this.model.findOne({
      where: {
        currencyId,
        effectiveDate: {
          [this.Op.lte]: effectiveDate,
        },
      },
      order: [
        ['effectiveDate', 'DESC'],
      ],
    });
    return record ? record.exchangeRate : 1;
  }
}

module.exports = GetExchangeRate;
