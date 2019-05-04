class FindOneUser {
  constructor({UserModel}) {
    this.model = UserModel;
    this.defaultOptions = {};
  }

  execute({args = {}, options = {}}) {
    return this.model.findByPk (args.id, {...this.defaultOptions, ...options});
  }
}

module.exports = FindOneUser;
