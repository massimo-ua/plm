module.exports = () => (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    code: DataTypes.INTEGER,
    shortName: DataTypes.STRING,
    name: DataTypes.STRING,
    home: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
  },
  {
    defaultScope: {
      where: {
        deletedAt: null,
      },
    },
  });
  return Currency;
};
