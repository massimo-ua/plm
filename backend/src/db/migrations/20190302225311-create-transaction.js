
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    srcAccountId: {
      type: Sequelize.INTEGER,
      index: true,
    },
    dstAccountId: {
      type: Sequelize.INTEGER,
      index: true,
    },
    actualDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      index: true,
    },
    notes: {
      type: Sequelize.STRING,
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
  }),
  down: queryInterface => queryInterface.dropTable('Transactions'),
};
