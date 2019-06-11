module.exports = ({ events, Accounts, Currencies }) => {
    events.on('TRANSACTION_CREATED', async ({ srcAccountId, dstAccountId, exchangeRate, total, ctx }) => {
        const srcAccount = srcAccountId && await Accounts.findOne.execute({
            args: { id: srcAccountId },
            ctx,
        });
        const dstAccount = dstAccountId && await Accounts.findOne.execute({
            args: { id: dstAccountId },
            ctx,
        });
        // rate = srcRate / dstRate
        console.log(srcAccount, dstAccount);
    });
};