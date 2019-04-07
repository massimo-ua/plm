/* eslint-disable import/no-unresolved */
const { Delete } = require('@core/services');

class DeleteCurrency extends Delete {
  constructor({ CurrencyModel }) {
    super(CurrencyModel);
  }

  async execute({ args: { id } }) {
    const record = await this.model.findOne({
      where: { id },
    });
    if (record) {
      Object.assign(record, { deletedAt: new Date() });
      await record.save();
      return record;
    }
    throw new Error('Record not found');
  }
}

module.exports = DeleteCurrency;
