'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    currencyId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};