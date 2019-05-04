class UpdateProfile {
  constructor({UserModel}) {
    this.model = UserModel;
    this.execute = this.execute.bind (this);
  }

  async execute({args, ctx: {user: caller}}) {
    const user = await this.model.findByPk (caller.id);
    Object.assign (user, args);
    await user.save ();
    return user;
  }
}

module.exports = UpdateProfile;
