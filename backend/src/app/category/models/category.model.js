module.exports = (sequelize, DataTypes, models) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    type: DataTypes.ENUM('P', 'L'),
    isHidden: DataTypes.BOOLEAN,
    teamId: DataTypes.INTEGER,
  });
  Category.belongsTo(models.Team, { as: 'team' });
  return Category;
};
