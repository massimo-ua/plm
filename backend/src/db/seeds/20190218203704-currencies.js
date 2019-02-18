

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Currencies', [
    {
      id: 1,
      code: 980,
      shortName: 'UAH',
      name: 'Ukrainian hryvna',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      code: 840,
      shortName: 'USD',
      name: 'American dollar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      code: 978,
      shortName: 'EUR',
      name: 'Euro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Currencies', null, {}),
};
