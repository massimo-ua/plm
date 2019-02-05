module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Categories', [
    {
      id: 1,
      name: 'Salary',
      type: 'P',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Food',
      type: 'L',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Categories', null, {}),
};
