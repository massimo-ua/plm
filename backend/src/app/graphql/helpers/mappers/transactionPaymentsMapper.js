module.exports = (ctx) => {
    const { parent, options } = ctx;
    return { ...ctx, options: { ...options, where: { transactionId: parent.id } } };
};