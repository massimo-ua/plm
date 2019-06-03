class PaymentsTotalAmount {
  constructor({PaymentModel}) {
    this.payments = PaymentModel;
  }

  async execute({args: {id}, ctx: {user: {teamId} = {}}, options = {}}) {
    const payments = await this.payments.findAll ({
      where: {teamId, transactionId: id},
      ...options,
    });
    const total = payments.reduce ((sum, payment) => sum + payment.amount, 0);
    return total;
  }
}

module.exports = PaymentsTotalAmount;
