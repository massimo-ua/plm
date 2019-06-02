class RollbackTransaction {
  constructor({TransactionModel, Payments, logger, db }) {
    this.model = TransactionModel;
    this.logger = logger;
    this.payments = Payments;
    this.db = db.db;
  }

  async execute({args: {id}, ctx: {user: { teamId } = {}}}) {
    try {
      return this.db.transaction (async t => {
        const transaction = await this.model.findOne ({where: {teamId, id}, transaction: t});
        if (!transaction) {
          throw new Error ('Record not found');
        }
        transaction.deletedAt = new Date ();
        await transaction.save ({ transaction: t });
        const payments = await this.payments.find.execute({
          options: {
            where: {
              transactionId: transaction.id
            },
            transaction: t,
          },
          ctx: { user: { teamId }},
        });
        await Promise.all(payments.map(payment => {
          return this.payments.rollback.execute({
            args: { id: payment.id },
            ctx: { user: { teamId }},
            options: { transaction: t }
          });
        }));
        return transaction;
      });
    } catch (error) {
      this.logger.error (error.message);
      throw new Error('Operation failed');
    }
  }
}

module.exports = RollbackTransaction;
