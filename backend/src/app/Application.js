const modules = require('./modules');
class Application {
  constructor(container, loader = modules) {
    this.server = container.server;
    this.logger = container.logger;
    loader(container);
  }

  async start() {
    await this.server.start();
  }
}

module.exports = Application;
