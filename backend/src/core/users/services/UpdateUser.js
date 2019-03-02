class Update {
  constructor(model) {
    this.model = model;
    this.execute = this.execute.bind(this);
  }

  async execute({ args: { id, ...body } }) {
    const user = await this.model.unscoped().findByPk(id);
    if (user) {
      Object.assign(user, body);
      await user.save();
      return user;
    }
    throw new Error('User not found');
  }
}

module.exports = Update;
