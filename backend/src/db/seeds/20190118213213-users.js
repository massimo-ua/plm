

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      login: 'john',
      password: '$2b$10$Nyc3SyZAwBdbc7MdnUM0KelSwAk3IiySSQz4ODtEjm4JvJoay6nDC',
      isActive: true,
      teamId: 1,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'John Smith',
      login: 'john.s',
      password: '$2b$10$Nyc3SyZAwBdbc7MdnUM0KelSwAk3IiySSQz4ODtEjm4JvJoay6nDC',
      isActive: true,
      teamId: 1,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
