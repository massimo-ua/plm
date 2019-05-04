const express = require ('express');
const http = require ('http');

class AppHttpServer {
  constructor({config, router, logger}) {
    this.config = config;
    this.logger = logger;
    this.app = express ();
    this.app.disable ('x-powered-by');
    this.app.use (router.rootRouter);
  }

  start () {
    const {port} = this.config.app;
    this.app.set ('port', port);
    const server = http.createServer (this.app);
    server.listen (port);
    server.on ('error', error => {
      this.logger.error (error);
    });
    server.on ('listening', () => {
      const {port: httpPort} = server.address ();
      this.logger.info (`[p ${process.pid}] Listening at port ${httpPort}`);
    });
  }
}

module.exports = AppHttpServer;
