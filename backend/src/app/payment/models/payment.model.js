module.exports = (sequelize, DataTypes, models) => {
  const Payment = sequelize.define('Payment', {
    categoryId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
  },
  {
    defaultScope: {
      where: {
        deletedAt: null,
      },
    },
  });
  Payment.belongsTo(models.Category, { as: 'category' });
  Payment.belongsTo(models.Transaction, { as: 'transaction' });
  Payment.belongsTo(models.Team, { as: 'team' });
  return Payment;
};
