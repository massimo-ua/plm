/* eslint-disable import/no-unresolved */
const { Update } = require('@core/services');

class UpdateCurrency extends Update {

  constructor({ CurrencyModel }) {
    super(CurrencyModel);
  }
  
  async execute({ args: { id, ...body } }) {
    const record = await this.model.findOne({
      where: { id },
    });
    if (record) {
      Object.assign(record, body);
      await record.save();
      return record;
    }
    throw new Error('Record not found');
  }
}

module.exports = UpdateCurrency;
