module.exports = (ctx) => {
    const { parent } = ctx;
    return { ...ctx, args: { effectiveDate: parent.actualDate, accountId: parent.accountId } };
};
