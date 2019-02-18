module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Currencies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    code: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    shortName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    home: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
  down: queryInterface => queryInterface.dropTable('Currencies'),
};
