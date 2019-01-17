

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      login: 'john',
      password: '1234567890',
      isActive: true,
      teamId: 1,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'John Smith',
      login: 'john.s',
      password: '1234567890',
      isActive: true,
      teamId: 1,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
