module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Transactions', [
    {
      id: 1,
      accountId: 1,
      actualDate: new Date(),
      type: 'L',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      accountId: 1,
      actualDate: new Date(),
      type: 'L',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      accountId: 1,
      actualDate: new Date(),
      type: 'L',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      accountId: 2,
      actualDate: new Date(),
      type: 'P',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Transactions', null, {}),
};
