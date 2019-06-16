class CalculateAccountBalance {
  constructor({Transactions, db}) {
    this.transactions = Transactions;
    this.Op = db.Op;
  }

  async execute({args: {id}, ctx}) {
    const transactions = await this.transactions.find.execute ({
      options: {
        where: {
          [this.Op.or]: [
            {
              srcAccountId: id,
            },
            {
              dstAccountId: id,
            },
          ],
        },
      },
      ctx,
    });
    const balance = await transactions.reduce (async (prev, transaction) => {
      const sum = await prev;
      const payments = await transaction.getPayments ();
      const transactionTotal = payments.reduce (
        (total, payment) => total + payment.amount,
        0
      );
      const multiplier = transaction.srcAccountId === id
        ? -1
        : transaction.dstExchangeRate;
      return sum + Math.round (transactionTotal * multiplier);
    }, Promise.resolve (0));
    return balance;
  }
}

module.exports = CalculateAccountBalance;
