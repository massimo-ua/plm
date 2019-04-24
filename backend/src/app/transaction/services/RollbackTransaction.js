class RollbackTransaction {
  constructor({
    TransactionModel,
    logger,
  }) {
    this.model = TransactionModel;
    this.logger = logger;
  }

  async execute({ args: { id }, ctx: { user } }) {
    try {
      const { teamId } = user;
      const transaction = await this.model.findOne({ where: { teamId, id } });
      if (!transaction) {
        throw new Error('Record not found');
      }
      Object.assign(transaction, { deletedAt: new Date() });
      await transaction.save();
      return transaction;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Operation failed');
    }
  }
}

module.exports = RollbackTransaction;
