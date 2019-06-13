function updateAccountBalance(account, amount) {
    if (account) {
        Object.assign(account, { balance: account.balance + Math.round(amount) });
        return account.save();
    }
    return null;
}

module.exports = ({ events, Accounts, Currencies }) => {
    events.on('TRANSACTION_CREATED', async ({ srcAccountId, dstAccountId, actualDate, exchangeRate, total, ctx }) => {
        const srcAccount = srcAccountId && await Accounts.findOne.execute({
            args: { id: srcAccountId },
            ctx,
        });
        const dstAccount = dstAccountId && await Accounts.findOne.execute({
            args: { id: dstAccountId },
            ctx,
        });
        let rate = 1;
        if (srcAccount && dstAccount) {
            if (srcAccount.currencyId !== dstAccount.currencyId) {
                const srcCurrencyRate = !exchangeRate && await Currencies.getExchangeRate.execute({
                    args: {
                        accountId: srcAccountId,
                        effectiveDate: actualDate,
                    },
                    ctx,
                });
                const dstCurrencyRate = !exchangeRate && await Currencies.getExchangeRate.execute({
                    args: {
                        accountId: dstAccountId,
                        effectiveDate: actualDate,
                    },
                    ctx,
                });
                rate = exchangeRate || srcCurrencyRate / dstCurrencyRate;
            }
            await Promise.all([
                updateAccountBalance(srcAccount, -total),
                updateAccountBalance(dstAccount, total * rate),
            ]);
        } else {
            await Promise.all([
                updateAccountBalance(srcAccount, -total),
                updateAccountBalance(dstAccount, total * rate),
            ]);
        }
    });
};
