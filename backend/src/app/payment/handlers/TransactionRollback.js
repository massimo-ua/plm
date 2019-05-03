function TransactionRollbackHandler({ events, logger, Payments }) {
  events.on('TRANSACTION_ROLLEDBACK', async ({ id: transactionId, teamId }) => {
    const ctx = {
      user: {
        teamId,
      },
    };
    const payments = await Payments.find.execute({
      options: { where: { transactionId } },
      ctx,
    });
    const promises = payments.map(({ id }) => Payments.rollback.execute({
      args: { id },
      ctx,
    }));
    await Promise.all(promises);
    logger.info(`Transaction #${transactionId} rolled back; Rolling back ${payments.length} related payments`);
  });
}

module.exports = TransactionRollbackHandler;
