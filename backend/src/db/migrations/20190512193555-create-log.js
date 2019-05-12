

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Logs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    startTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    data: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    level: {
      type: Sequelize.STRING
    },
    context: {
      type: Sequelize.JSON,
    },
  }, {
    indexes: [
      { fields: ['level'] },
      { fields: ['startTime'] },
      { fields: ['categoryName'] },
    ],
  }),
  down: queryInterface => queryInterface.dropTable('Logs'),
};
