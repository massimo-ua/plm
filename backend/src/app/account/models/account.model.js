module.exports = (sequelize, DataTypes, models) => {
  const Account = sequelize.define('Account', {
    name: DataTypes.STRING,
    type: DataTypes.ENUM('S', 'C', 'SC'),
    currencyId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
  },
  {
    defaultScope: {
      where: {
        deletedAt: null,
      },
    },
  });
  Account.belongsTo(models.Team, { as: 'team' });
  Account.belongsTo(models.Currency, { as: 'currency' });
  return Account;
};
