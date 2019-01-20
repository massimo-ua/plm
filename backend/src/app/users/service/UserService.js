class UserService {
  constructor(model, { crypto, jwt, comparePassword }) {
    this.model = model;
    this.crypto = crypto;
    this.jwt = jwt;
    this.comparePassword = comparePassword;
    this.findById = this.findById.bind(this);
    this.findAll = this.findAll.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  findById({ id }) {
    return this.model.findById(id, {
      include: ['team'],
    });
  }

  findAll() {
    return this.model.findAll({
      include: ['team'],
    });
  }

  async signup({ username, login, password }) {
    const user = await this.model.create({
      name: username,
      login,
      password: await this.crypto.hash(password),
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
}

module.exports = UserService;
