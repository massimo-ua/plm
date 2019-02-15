class Update {
  constructor(model) {
    this.model = model;
    this.execute = this.execute.bind(this);
  }

  async execute({ args: { id, ...body }, ctx: { user } }) {
    const { teamId } = user;
    const category = await this.model.findOne({
      where: {
        id,
        teamId,
      },
    });
    if (category) {
      Object.assign(category, body);
      await category.save();
      return category;
    }
    throw new Error('Category not found');
  }
}

module.exports = Update;
