class RollbackPayment {
  constructor({
    PaymentModel,
    logger,
  }) {
    this.payments = PaymentModel;
    this.logger = logger;
  }

  async execute({ args: { id }, ctx: { user: teamId } }) {
    try {
        const payment = await this.payments.findOne({ where: { teamId, id }});
        if (!payment) {
          throw new Error('Record not found');
        }
        payment.deletedAt = new Date();
        await payment.save();
        return payment;
    } catch (error) {
      this.logger.error(error);
      throw new Error('Operation failed');
    }
  }
}

module.exports = RollbackPayment;
