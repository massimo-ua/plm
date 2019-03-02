class FindOneUser {
  constructor(model) {
    this.model = model;
    this.defaultOptions = {};
  }

  execute({ args = {}, options = {} }) {
    return this.model.findByPk(args.id, { ...this.defaultOptions, ...options });
  }
}

module.exports = FindOneUser;
