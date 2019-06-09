class CreateTransaction {
  constructor({TransactionModel, Payments, events, db}) {
    this.transactions = TransactionModel;
    this.payments = Payments;
    this.db = db.db;
    this.events = events;
  }

  async execute({
    args: {
      input: {srcAccountId, dstAccountId, actualDate, notes, payments, exchangeRate} = {},
    },
    ctx: {user: {teamId}},
  }) {
    try {
      return this.db.transaction (async transaction => {
        const createdTransaction = await this.transactions.create (
          {srcAccountId, dstAccountId, actualDate, notes, teamId},
          {transaction}
        );
        const promises = payments.map (payment =>
          this.payments.create.execute ({
            args: {...payment, transactionId: createdTransaction.id},
            ctx: {user: {teamId}},
            options: {transaction},
          })
        );
        const createdPayments = await Promise.all (promises);
        await createdTransaction.setPayments ([...createdPayments], {
          transaction,
        });
        this.events.emit('TRANSACTION_CREATED', {
          srcAccountId,
          dstAccountId,
          exchangeRate,
          total: createdPayments.reduce((acc, payment) => acc + payment.amount, 0),
        });
        return createdTransaction;
      });
    } catch (error) {
      throw new Error ('Operation failed');
    }
  }
}

module.exports = CreateTransaction;
