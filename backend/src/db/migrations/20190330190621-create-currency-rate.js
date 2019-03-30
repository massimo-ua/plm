

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('CurrencyRates', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    currencyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    effectiveDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    exchangeRate: {
      type: Sequelize.FLOAT,
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
      { fields: ['currencyId', 'effectiveDate'], unique: true },
      { fields: ['currencyId'] },
      { fields: ['effectiveDate'] },
    ],
  }),
  down: queryInterface => queryInterface.dropTable('CurrencyRates'),
};
