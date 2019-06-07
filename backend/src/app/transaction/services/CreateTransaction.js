class CreateTransaction {
  constructor({TransactionModel, Payments, Accounts, Currencies, db}) {
    this.transactions = TransactionModel;
    this.payments = Payments;
    this.accounts = Accounts;
    this.currencies = Currencies;
    this.db = db.db;
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
        // const srcAccount = srcAccountId && await this.accounts.findOne.execute({
        //   args: {id: srcAccountId},
        //   ctx: {user: {teamId}},
        //   options: {transaction},
        // });
        // const dstAccount = dstAccountId && await this.accounts.findOne.execute({
        //   args: {id: dstAccountId},
        //   ctx: {user: {teamId}},
        //   options: {transaction},
        // });
        if (srcAccountId && dstAccountId) {
          const srcCurrencyRate = await this.currencies.getExchangeRate.execute (
            {
              args: {accountId: srcAccountId, actualDate},
              ctx: {user: {teamId}},
            }
          );
          const dstCurrencyRate = await this.currencies.getExchangeRate.execute (
            {
              args: {accountId: dstAccountId, actualDate},
              ctx: {user: {teamId}},
            }
          );
          const conversionRate = srcCurrencyRate / (exchangeRate || dstCurrencyRate);

        } else {

        }
        return createdTransaction;
      });
    } catch (error) {
      throw new Error ('Operation failed');
    }
  }
}

module.exports = CreateTransaction;
