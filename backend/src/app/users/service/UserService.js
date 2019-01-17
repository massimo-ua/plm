class UserService {
  constructor(model) {
    this.model = model;
  }

  findById({ id }) {
    return this.model.findById(id);
  }

  findAll() {
    return this.model.findAll({});
  }
}

module.exports = UserService;
