module.exports = (sequelize, DataTypes, models) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    teamId: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
  },
  {
    defaultScope: {
      where: {
        isActive: true,
      },
    },
  });
  User.belongsTo(models.Team, { as: 'team' });
  return User;
};
