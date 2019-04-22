class RollbackTransaction {
  constructor({
    TransactionModel,
    Payments,
    Accounts,
    db,
    logger,
  }) {
    this.model = TransactionModel;
    this.payments = Payments;
    this.accounts = Accounts;
    this.db = db.db;
    this.logger = logger;
  }

  async execute({ args: { id }, ctx: { user } }) {
    try {
      const { teamId } = user;
      const rolledback = await this.db.transaction(async (t) => {
        const transaction = await this.model.findOne({ where: { teamId, id }, transaction: t });
        const payments = await this.payments.find.execute({
          options: {
            where: { transactionId: transaction.id },
            transaction: t,
          },
          ctx: { user },
        });
        const { accountId, type } = transaction;
        const transactionTotal = payments.reduce((acc, payment) => acc + payment.amount, 0);
        const factor = type === 'P' ? -1 : 1;
        const account = await this.accounts.findOne.execute({
          args: { id: accountId },
          ctx: { user },
          options: {
            transaction: t,
          },
        });
        account.balance += transactionTotal * factor;
        await account.save({ transaction: t });
        Object.assign(transaction, { deletedAt: new Date() });
        await transaction.save({ transaction: t });
        return transaction;
      });
      return rolledback;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Operation failed');
    }
  }
}

module.exports = RollbackTransaction;
