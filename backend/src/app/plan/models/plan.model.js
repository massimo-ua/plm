module.exports = ({ AccountModel, TeamModel }) => (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    targetAmount: DataTypes.INTEGER,
    dailyAmount: DataTypes.INTEGER,
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
  Plan.belongsToMany(AccountModel, {
    as: 'accounts', through: 'PlansAccounts', foreignKey: 'planId', otherKey: 'accountId',
  });
  Plan.belongsTo(TeamModel, { as: 'team' });
  return Plan;
};
