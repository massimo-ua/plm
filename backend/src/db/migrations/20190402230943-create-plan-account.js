

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PlansAccounts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    accountId: {
      type: Sequelize.INTEGER,
      required: true,
    },
    planId: {
      type: Sequelize.INTEGER,
      required: true,
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
      { fields: ['accountId'] },
      { fields: ['planId'] },
    ],
  }),
  down: queryInterface => queryInterface.dropTable('PlansAccounts'),
};
