

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Accounts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
    },
    type: {
      type: Sequelize.ENUM('S', 'C', 'SC'),
      required: true,
    },
    currencyId: {
      type: Sequelize.INTEGER,
      required: true,
    },
    teamId: {
      type: Sequelize.INTEGER,
      required: true,
    },
    balance: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Accounts'),
};
