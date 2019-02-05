class FindOneUser {
  constructor(model) {
    this.model = model;
    this.defaultOptions = {
      include: ['team'],
    };
  }

  execute({ args = {}, options = {} }) {
    return this.model.findByPk(args.id, { ...this.defaultOptions, ...options });
  }
}

module.exports = FindOneUser;
