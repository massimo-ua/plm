class RollbackPayment {
  constructor({
    PaymentModel,
    Transactions,
    Accounts,
    db,
    logger,
  }) {
    this.payments = PaymentModel;
    this.transactions = Transactions;
    this.accounts = Accounts;
    this.db = db.db;
    this.logger = logger;
  }

  async execute({ args: { id }, ctx: { user } }) {
    try {
      const { teamId } = user;
      const rolledback = await this.db.transaction(async (t) => {
        const payment = await this.payments.findOne({ where: { teamId, id }, transaction: t });
        if (!payment) {
          throw new Error('Record not found');
        }
        const transaction = await this.transactions.findOneWithRolledback.execute({
          args: { id: payment.transactionId },
          ctx: { user },
          options: { transaction: t },
        });
        const { accountId, type } = transaction;
        const factor = type === 'P' ? -1 : 1;
        const account = await this.accounts.findOne.execute({
          args: { id: accountId },
          ctx: { user },
          options: { transaction: t },
        });
        account.balance += payment.amount * factor;
        await account.save({ transaction: t });
        Object.assign(payment, { deletedAt: new Date() });
        await payment.save({ transaction: t });
        return payment;
      });
      return rolledback;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Operation failed');
    }
  }
}

module.exports = RollbackPayment;
