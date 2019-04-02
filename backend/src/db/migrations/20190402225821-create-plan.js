

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Plans', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    startDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    targetAmount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dailyAmount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    teamId: {
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
      { fields: ['teamId'] },
      { fields: ['endDate'] },
    ],
  }),
  down: queryInterface => queryInterface.dropTable('Plans'),
};
