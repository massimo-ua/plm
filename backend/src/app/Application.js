class Application {
  constructor({ server, logger, modulesLoader }) {
    this.server = server;
    this.logger = logger;
    this.loader = modulesLoader;
  }

  async start() {
    await this.server.start();
  }
}

module.exports = Application;
