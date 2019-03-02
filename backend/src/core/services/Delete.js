class Delete {
  constructor(model) {
    this.model = model;
    this.execute = this.execute.bind(this);
  }

  async execute({ args: { id }, ctx: { user } }) {
    const { teamId } = user;
    const record = await this.model.findOne({
      where: {
        id,
        teamId,
      },
    });
    if (record) {
      Object.assign(record, { deletedAt: new Date() });
      await record.save();
      return record;
    }
    throw new Error('Record not found');
  }
}

module.exports = Delete;
