module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Transactions', [
    {
      id: 1,
      srcAccountId: 1,
      actualDate: new Date(),
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      srcAccountId: 1,
      actualDate: new Date(),
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      srcAccountId: 1,
      actualDate: new Date(),
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      dstAccountId: 2,
      actualDate: new Date(),
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      srcAccountId: 1,
      dstAccountId: 3,
      actualDate: new Date(),
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Transactions', null, {}),
};
