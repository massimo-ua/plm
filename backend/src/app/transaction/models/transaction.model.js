module.exports = ({AccountModel, TeamModel}) => (sequelize, DataTypes) => {
  const Transaction = sequelize.define (
    'Transaction',
    {
      accountId: DataTypes.INTEGER,
      actualDate: DataTypes.DATEONLY,
      type: DataTypes.ENUM ('P', 'L'),
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
    }
  );
  Transaction.belongsTo (AccountModel, {as: 'account'});
  Transaction.belongsTo (TeamModel, {as: 'team'});
  Transaction.belongsTo (Transaction, {
    foreignKey: 'mirrorId',
    targetKey: 'id',
    as: 'mirror',
  });
  return Transaction;
};
