class CreateTransferTransaction {
  constructor({TransactionModel, db}) {
    this.model = TransactionModel;
    this.db = db.db;
  }

  async execute({args, ctx: {user}}) {
    try {
      const transfer = await this.db.transaction (async transaction => {
        const {teamId} = user;
        const {sourceAccountId, destinationAccountId, ...rest} = args;
        const transactionA = await this.model.create (
          {
            ...rest,
            type: 'L',
            teamId,
            accountId: sourceAccountId,
          },
          {
            transaction,
          }
        );
        const transactionB = await this.model.create (
          {
            ...rest,
            type: 'P',
            teamId,
            accountId: destinationAccountId,
            mirrorId: transactionA.id,
          },
          {
            transaction,
          }
        );
        transactionA.mirrorId = transactionB.id;
        transactionA.save ({transaction});
        return [transactionA, transactionB];
      });
      return transfer;
    } catch (error) {
      throw new Error ('Transfer failed');
    }
  }
}

module.exports = CreateTransferTransaction;
