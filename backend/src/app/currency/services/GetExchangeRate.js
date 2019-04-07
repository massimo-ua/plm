class GetExchangeRate {
  constructor({ Accounts, CurrencyRateModel, db }) {
    this.model = CurrencyRateModel;
    this.Op = db.Op;
    this.findAccount = Accounts.findOne;
  }

  async execute({ args: { accountId, effectiveDate }, ctx }) {
    const { currencyId } = await this.findAccount.execute({ args: { id: accountId }, ctx });
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
