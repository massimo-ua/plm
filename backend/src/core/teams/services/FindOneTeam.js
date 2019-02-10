class FindOneTeam {
  constructor(model) {
    this.model = model;
    this.defaultOptions = {};
  }

  execute({ parent = {}, args = {}, options = {} }) {
    const id = parent.teamId || args.id;
    return this.model.findByPk(id, { ...this.defaultOptions, ...options });
  }
}

module.exports = FindOneTeam;
