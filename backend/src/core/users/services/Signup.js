class Signup {
  constructor(model, { jwt }) {
    this.model = model;
    this.jwt = jwt;
    this.execute = this.execute.bind(this);
  }

  async execute({ args: { username, login, password } = {} }) {
    const user = await this.model.create({
      name: username,
      login,
      password,
    });
    return this.jwt.sign(user);
  }
}

module.exports = Signup;
