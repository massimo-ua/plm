module.exports = (sequelize, DataTypes, models) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    teamId: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
  }, {});
  User.belongsTo(models.Team, { as: 'team' });
  return User;
};
