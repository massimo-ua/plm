class SetAsHomeCurrency {
  
  constructor({ CurrencyModel, db }) {
    this.model = CurrencyModel;
    this.db = db;
  }

  async execute({ args: { id } }) {
    try {
      const updated = await this.db.transaction(async (transaction) => {
        await this.model.update({
          home: false,
        },
        {
          where: {
            home: true,
          },
          transaction,
        });
        const record = await this.model.findOne({
          where: { id },
          transaction,
        });
        if (record) {
          record.home = true;
          record.rate = 1;
          await record.save({ transaction });
          return record;
        }
        throw new Error('Record not found');
      });
      return updated;
    } catch (error) {
      throw new Error('Operation failed');
    }
  }
}

module.exports = SetAsHomeCurrency;
