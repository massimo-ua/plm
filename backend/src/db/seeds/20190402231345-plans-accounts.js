const today = new Date();
const tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('PlansAccounts', [
    {
      id: 1,
      accountId: 1,
      planId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      accountId: 2,
      planId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      accountId: 2,
      planId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('PlansAccounts', null, {}),
};
