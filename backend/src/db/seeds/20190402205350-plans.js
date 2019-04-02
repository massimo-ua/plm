module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Plans', [
    {
      id: 1,
      name: 'Plan 1',
      startDate: new Date('2019-01-01'),
      endDate: new Date('2019-11-01'),
      targetAmount: 10000,
      dailyAmount: 23,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Plan 2',
      startDate: new Date('2018-07-01'),
      endDate: new Date('2019-09-01'),
      targetAmount: 230000,
      dailyAmount: 47768,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Plans', null, {}),
};
