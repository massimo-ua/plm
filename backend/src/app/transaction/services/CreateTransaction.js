/* eslint-disable import/no-unresolved */
const Utils = require ('@core/utils');

class CreateTransaction {
  constructor({TransactionModel, Payments, db}) {
    this.transactions = TransactionModel;
    this.payments = Payments;
    this.db = db.db;
  }

 async execute({
    args: {srcAccountId, dstAccountId, actualDate, notes, payments},
    ctx: {user: {teamId}},
    options = {},
  }) {
    try {
      const created = await this.db.transaction(async (transaction) => {
        // create transaction
        // add payments
      });
      return created;
    } catch (error) {
      throw new Error('Operation failed');
    }
  }
}

module.exports = CreateTransaction;
