module.exports = (sequelize, DataTypes, models) => {
  const Transaction = sequelize.define('Transaction', {
    accountId: DataTypes.INTEGER,
    actualDate: DataTypes.DATE,
    type: DataTypes.ENUM('P', 'L'),
    teamId: DataTypes.INTEGER,
    mirrorId: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
  },
  {
    defaultScope: {
      where: {
        deletedAt: null,
      },
    },
  });
  Transaction.belongsTo(models.Account, { as: 'account' });
  Transaction.belongsTo(models.Team, { as: 'team' });
  Transaction.belongsTo(Transaction, {
    foreignKey: 'mirrorId',
    targetKey: 'id',
    as: 'mirror',
  });
  return Transaction;
};
