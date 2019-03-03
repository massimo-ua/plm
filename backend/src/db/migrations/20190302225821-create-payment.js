

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Payments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    transactionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
      { fields: ['transactionId'] },
      { fields: ['categoryId'] },
    ],
  }),
  down: queryInterface => queryInterface.dropTable('Payments'),
};