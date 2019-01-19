class UserService {
  constructor(model) {
    this.model = model;
  }

  findById({ id }) {
    return this.model.findById(id, {
      include: ['team'],
    });
  }

  findAll() {
    return this.model.findAll({
      include: ['team'],
    });
  }
}

module.exports = UserService;
