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
    this.profile = this.profile.bind(this);
    this.update = this.update.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  findById({ args = {}, options = {} }) {
    return this.model.findByPk(args.id, { ...this.defaultOptions, ...options });
  }

  findAll({ options = {} }) {
    return this.model.findAll({ ...this.defaultOptions, ...options });
  }

  async signup({ args: { username, login, password } = {} }) {
    const user = await this.model.create({
      name: username,
      login,
      password,
    });

    return this.jwt.sign(user);
  }

  async login({ args: { login, password } = {} }) {
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

  profile({ ctx }) {
    return this.model.findByPk(ctx.user.id, {
      include: ['team'],
    });
  }

  async update({ args: { id, ...body } }) {
    const user = await this.model.unscoped().findByPk(id);
    if (user) {
      Object.assign(user, body);
      await user.save();
      return user;
    }
    throw new Error('User not found');
  }

  async updateProfile({ args, ctx: { user: caller } }) {
    const user = await this.model.findByPk(caller.id, { ...this.defaultOptions });
    Object.assign(user, args);
    await user.save();
    return user;
  }
}

module.exports = UserService;
