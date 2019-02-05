class UpdateProfile {
  constructor(model) {
    this.model = model;
    this.execute = this.execute.bind(this);
  }

  async execute({ args, ctx: { user: caller } }) {
    const user = await this.model.findByPk(caller.id, { include: ['team'] });
    Object.assign(user, args);
    await user.save();
    return user;
  }
}

module.exports = UpdateProfile;
