module.exports = ({TeamModel, crypto}) => (sequelize, DataTypes) => {
  const User = sequelize.define (
    'User',
    {
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
    }
  );
  User.belongsTo (TeamModel, {as: 'team'});
  async function hashUserPassword (user) {
    if (user.password) {
      const hash = await crypto.hash (user.password);
      Object.assign (user, {password: hash});
    }
  }

  User.addHook ('beforeSave', 'hashUserPassword', hashUserPassword);
  return User;
};
