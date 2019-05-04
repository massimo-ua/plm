class Create {
  constructor (model) {
    this.model = model;
    this.execute = this.execute.bind (this);
  }

  execute({args, ctx: {user}}) {
    const {teamId} = user;
    return this.model.create ({...args, teamId});
  }
}

module.exports = Create;
