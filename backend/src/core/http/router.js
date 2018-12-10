const { Router } = require('express');
const compression = require('compression');

class AppRouter {
  constructor({ httpRequestsLogger, errorHandler, notFoundHandler }) {
    this.versions = {};
    this.root = Router();
    this.root.use(httpRequestsLogger);
    this.root.use(compression());
    this.addVersion('v1');
    this.versions.v1.get('/', (req, res) => {
      res.json({
        name: 'PLM public API',
        version: 'v1',
      });
    });
    this.root.use(notFoundHandler);
    this.root.use(errorHandler);
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
    } else {
      throw new Error(`API version "${version}" is not registered`);
    }
  }
}

module.exports = AppRouter;
