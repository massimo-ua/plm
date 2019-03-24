class Login {
  constructor({ UserModel, jwt, comparePassword, crypto }) {
    this.model = UserModel;
    this.jwt = jwt;
    this.crypto = crypto;
    this.comparePassword = comparePassword;
    this.execute = this.execute.bind(this);
  }

  async execute({ args: { login, password } = {} }) {
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

module.exports = Login;
