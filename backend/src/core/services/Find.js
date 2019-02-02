class Find {
  constructor(model, defaultOptions = {}) {
    this.model = model;
    this.defaultOptions = defaultOptions;
  }

  execute(options = {}, { user }) {
    const { teamId } = user;
    return this.model.findAll({ ...this.defaultOptions, ...options });
  }
}

module.exports = Find;
