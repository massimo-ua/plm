class UserService {
  constructor(model, { crypto, jwt, comparePassword }) {
    this.defaultOptions = {
      include: ['team'],
    };
    this.model = model;
    this.crypto = crypto;
    this.jwt = jwt;
    this.comparePassword = comparePassword;
    this.findById = this.findById.bind(this);
    this.findAll = this.findAll.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.me = this.me.bind(this);
    this.update = this.update.bind(this);
  }

  findById({ id }, options = {}) {
    return this.model.findByPk(id, { ...this.defaultOptions, ...options });
  }

  findAll(options = {}) {
    return this.model.findAll({ ...this.defaultOptions, ...options });
  }

  async signup({ username, login, password }) {
    const user = await this.model.create({
      name: username,
      login,
      password,
    });

    return this.jwt.sign(user);
  }

  async login({ login, password }) {
    const errorMessage = 'Invalid login or password. Please try again.';
    const user = await this.model.findOne({
      where: {
        login,
        isActive: true,
      },
    });

    const isPasswordValid = await this.comparePassword(password, user, this.crypto.compare);

    if (isPasswordValid) {
      return this.jwt.sign(user);
    }

    throw new Error(errorMessage);
  }

  me(args, { user }) {
    return this.model.findByPk(user.id, {
      include: ['team'],
    });
  }

  async update({ id, ...body }) {
    const record = await this.model.unscoped().findById(id);
    if (record) {
      Object.assign(record, body);
      await record.save();
      return record;
    }
    throw new Error('User not found');
  }
}

module.exports = UserService;
