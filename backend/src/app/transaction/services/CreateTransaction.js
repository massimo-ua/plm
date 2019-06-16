class CreateTransaction {
  constructor({TransactionModel, Payments, events, db, Currencies, logger}) {
    this.transactions = TransactionModel;
    this.payments = Payments;
    this.currencies = Currencies;
    this.db = db.db;
    this.events = events;
    this.logger = logger;
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
    ctx,
  }) {
    try {
      if (srcAccountId === dstAccountId) {
        throw new Error('Transactions within one account is not allowed');
      }
      const { user: { teamId } = {}} = ctx;
      return this.db.transaction (async transaction => {
        const createdTransaction = await this.transactions.create (
          {
            srcAccountId,
            dstAccountId,
            dstExchangeRate: exchangeRate,
            actualDate,
            notes,
            teamId,
          },
          {transaction}
        );
        if (!exchangeRate && srcAccountId && dstAccountId) {
          const srcAccount = await createdTransaction.getSrcAccount();
          const srcRate = await this.currencies.getExchangeRate.execute ({
            args: {
              currencyId: srcAccount.currencyId,
              effectiveDate: actualDate,
            },
            ctx,
          });
          const dstAccount = await createdTransaction.getDstAccount();
          const dstRate = await this.currencies.getExchangeRate.execute ({
            args: {
              currencyId: dstAccount.currencyId,
              effectiveDate: actualDate,
            },
            ctx,
          });
          const dstExchangeRate = srcRate / dstRate;
          createdTransaction.dstExchangeRate = dstExchangeRate;
          await createdTransaction.save({ transaction });
        }
        const promises = payments.map (payment =>
          this.payments.create.execute ({
            args: {...payment, transactionId: createdTransaction.id},
            ctx,
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
      this.logger.error(error.message);
      throw new Error ('Operation failed');
    }
  }
}

module.exports = CreateTransaction;
