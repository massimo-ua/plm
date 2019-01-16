class UserService {
  constructor(model) {
    this.model = model;
    this.users = [
      {
        id: 1,
        name: 'Massimo',
      },
      {
        id: 2,
        name: 'Test',
      },
    ];
  }

  findById({ id }) {
    const [selectedUser] = this.users.filter(user => user.id === id);
    return selectedUser;
  }

  findAll() {
    return this.users;
  }
}

module.exports = UserService;
