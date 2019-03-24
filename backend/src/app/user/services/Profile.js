class Profile {
  constructor({ UserModel }) {
    this.model = UserModel;
    this.execute = this.execute.bind(this);
  }

  execute({ ctx }) {
    return this.model.findByPk(ctx.user.id);
  }
}

module.exports = Profile;
