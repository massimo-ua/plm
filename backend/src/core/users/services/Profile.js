class Profile {
  constructor(model) {
    this.model = model;
    this.execute = this.execute.bind(this);
  }

  execute({ ctx }) {
    return this.model.findByPk(ctx.user.id);
  }
}

module.exports = Profile;
