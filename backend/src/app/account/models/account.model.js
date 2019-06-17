module.exports = ({ TeamModel, CurrencyModel }) => (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    name: DataTypes.STRING,
    type: DataTypes.ENUM('S', 'C', 'SC'),
    currencyId: DataTypes.INTEGER,
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
  Account.belongsTo(TeamModel, { as: 'team' });
  Account.belongsTo(CurrencyModel, { as: 'currency' });
  return Account;
};
