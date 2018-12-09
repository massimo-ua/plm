const { Router } = require('express');
const compression = require('compression');

class AppRouter {
  constructor({ httpRequestsLogger, errorHandler }) {
    this.versions = {};
    this.root = Router();
    this.root.use(httpRequestsLogger);
    this.root.use(compression());
    this.root.use(errorHandler);
    this.addVersion('v1');
    this.versions.v1.get('/', (req, res) => {
      res.json({
        name: 'PLM public API',
        version: 'v1',
      });
    });
  }

  addVersion(version) {
    this.versions[version] = Router();
    const versionRouter = this.versions[version];
    this.root.use(`/api/${version}`, versionRouter);
  }

  get rootRouter() {
    return this.root;
  }

  attach({ version, path, subRouter }) {
    if (this.versions[version]) {
      this.versions[version].use(`/${path}`, subRouter);
    }
  }
}

module.exports = AppRouter;
