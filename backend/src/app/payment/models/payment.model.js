module.exports = ({ CategoryModel, TransactionModel, TeamModel }) => (sequelize, DataTypes) => {
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
  Payment.belongsTo(CategoryModel, { as: 'category' });
  Payment.belongsTo(TransactionModel, { as: 'transaction' });
  Payment.belongsTo(TeamModel, { as: 'team' });
  return Payment;
};
