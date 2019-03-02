
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    sourceAccountId: {
      type: Sequelize.INTEGER,
      index: true,
      allowNull: false,
    },
    destinationAccountId: {
      type: Sequelize.INTEGER,
    },
    actualDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mirrorTransactionId: {
      type: Sequelize.INTEGER,
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
