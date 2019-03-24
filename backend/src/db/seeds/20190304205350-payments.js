// id: {
//   allowNull: false,
//   autoIncrement: true,
//   primaryKey: true,
//   type: Sequelize.INTEGER,
// },
// categoryId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
// },
// amount: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
// },
// transactionId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
// },
// teamId: {
//   type: Sequelize.INTEGER,
//   required: true,
// },
// deletedAt: {
//   type: Sequelize.DATE,
// },
// createdAt: {
//   allowNull: false,
//   type: Sequelize.DATE,
// },
// updatedAt: {
//   allowNull: false,
//   type: Sequelize.DATE,
// },


module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Payments', [
    {
      id: 1,
      categoryId: 1,
      amount: 9900,
      transactionId: 1,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      categoryId: 1,
      amount: 11000,
      transactionId: 2,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      categoryId: 1,
      amount: 11500,
      transactionId: 3,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      categoryId: 2,
      amount: 12500,
      transactionId: 3,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Payments', null, {}),
};
