const Sequelize = require('sequelize');

const User = {
  name: Sequelize.STRING,
  login: Sequelize.STRING,
  password: Sequelize.STRING,
  isActive: Sequelize.BOOLEAN,
  teamId: Sequelize.INTEGER,
  isAdmin: Sequelize.BOOLEAN,
};

module.exports = User;
