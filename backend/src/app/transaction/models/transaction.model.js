module.exports = ({AccountModel, TeamModel}) => (sequelize, DataTypes) => {
  const Transaction = sequelize.define (
    'Transaction',
    {
      srcAccountId: DataTypes.INTEGER,
      dstAccountId: DataTypes.INTEGER,
      actualDate: DataTypes.DATEONLY,
      teamId: DataTypes.INTEGER,
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
  Transaction.belongsTo (AccountModel, {
    foreignKey: 'srcAccountId',
    targetKey: 'id',
    as: 'srcAccount'
  });
  Transaction.belongsTo (AccountModel, {
    foreignKey: 'dstAccountId',
    targetKey: 'id',
    as: 'dstAccount'
  });
  Transaction.belongsTo (TeamModel, {as: 'team'});
  return Transaction;
};
