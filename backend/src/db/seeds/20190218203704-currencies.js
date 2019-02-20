

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Currencies', [
    {
      id: 1,
      code: 980,
      shortName: 'UAH',
      name: 'Ukrainian hryvna',
      rate: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      code: 840,
      shortName: 'USD',
      name: 'American dollar',
      rate: 2875,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      code: 978,
      shortName: 'EUR',
      name: 'Euro',
      rate: 3060,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Currencies', null, {}),
};
