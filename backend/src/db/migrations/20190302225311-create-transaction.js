
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    accountId: {
      type: Sequelize.INTEGER,
      index: true,
      allowNull: false,
    },
    actualDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM('D', 'C'),
      allowNull: false,
    },
    mirrorId: {
      type: Sequelize.INTEGER,
    },
    notes: {
      type: Sequelize.STRING,
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
  }, {
    indexes: [
      { fields: ['sourceAccountId'] },
      { fields: ['actualDate'] },
    ],
  }),
  down: queryInterface => queryInterface.dropTable('Transactions'),
};