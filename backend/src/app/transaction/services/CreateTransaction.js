class CreateTransaction {
  constructor({TransactionModel, Payments, events, db, Currencies}) {
    this.transactions = TransactionModel;
    this.payments = Payments;
    this.currencies = Currencies;
    this.db = db.db;
    this.events = events;
  }

  async execute({
    args: {
      input: {
        srcAccountId,
        dstAccountId,
        actualDate,
        notes,
        payments,
        exchangeRate,
      } = {},
    },
    ctx: {user: {teamId}},
  }) {
    try {
      return this.db.transaction (async transaction => {
        let dstExchangeRate;
        if (srcAccountId && dstAccountId && srcAccountId !== dstAccountId) {
          const srcRate = await this.currencies.getExchangeRate.execute ({
            args: {
              accountId: srcAccountId,
              effectiveDate: actualDate,
            },
            ctx: {user: {teamId}},
          });

          const dstRate = await this.currencies.getExchangeRate.execute ({
            args: {
              accountId: dstAccountId,
              effectiveDate: actualDate,
            },
            ctx: {user: {teamId}},
          });

          dstExchangeRate = srcRate / dstRate;
        }
        const createdTransaction = await this.transactions.create (
          {
            srcAccountId,
            dstAccountId,
            dstExchangeRate: exchangeRate || dstExchangeRate,
            actualDate,
            notes,
            teamId,
          },
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
        return createdTransaction;
      });
    } catch (error) {
      throw new Error ('Operation failed');
    }
  }
}

module.exports = CreateTransaction;
