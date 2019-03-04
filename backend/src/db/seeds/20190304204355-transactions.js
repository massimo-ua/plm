module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Transactions', [
    {
      id: 1,
      accountId: 1,
      actualDate: new Date(),
      type: 'D',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      accountId: 1,
      actualDate: new Date(),
      type: 'D',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      accountId: 1,
      actualDate: new Date(),
      type: 'D',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Transactions', null, {}),
};
