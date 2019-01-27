class Application {
  constructor(core) {
    this.server = core.server;
    this.logger = core.logger;
  }

  async start() {
    await this.server.start();
  }
}

module.exports = Application;
