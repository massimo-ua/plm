/* eslint-disable import/no-unresolved */
const sequelize = require('sequelize');
const { Update } = require('@core/services');

class SetAsHomeCurrency extends Update {
  async execute({ args: { id } }) {
    try {
      await sequelize.transaction(async (transaction) => {
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
          await record.save({ transaction });
          return record;
        }
        throw new Error('Record not found');
      });
    } catch (error) {
      throw new Error('Operation failed');
    }
  }
}

module.exports = SetAsHomeCurrency;
