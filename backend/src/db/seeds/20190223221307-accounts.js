

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Accounts', [
    {
      id: 1,
      name: 'Salary',
      type: 'S',
      currencyId: 1,
      teamId: 1,
      balance: 100000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Deposit',
      type: 'S',
      currencyId: 2,
      teamId: 1,
      balance: 100000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Debt',
      type: 'C',
      currencyId: 1,
      teamId: 1,
      balance: 100000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Accounts', null, {}),
};
