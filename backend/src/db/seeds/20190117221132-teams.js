

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Teams', [{
    name: 'Family',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Acme',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Teams', null, {}),
};
