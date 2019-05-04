class Update {
  constructor (model) {
    this.model = model;
    this.execute = this.execute.bind (this);
  }

  async execute({args: {id, ...body}, ctx: {user}, options = {}}) {
    const {teamId} = user;
    const record = await this.model.findOne ({
      where: {
        id,
        teamId,
      },
      ...options,
    });
    if (record) {
      Object.assign (record, body);
      await record.save ();
      return record;
    }
    throw new Error ('Record not found');
  }
}

module.exports = Update;
