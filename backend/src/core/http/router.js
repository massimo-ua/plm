const { Router } = require('express');
const compression = require('compression');

class AppRouter {
  constructor({
    httpRequestsLogger,
    errorHandler,
    notFoundHandler,
    logger,
  }) {
    this.logger = logger;
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

  attach({ name, version, path, subRouter }) {
    if (this.versions[version]) {
      try {
        this.versions[version].use(`/${path}`, subRouter);
        this.logger.info(`Router [${name}] registered successfully`);
      } catch (error) {
        console.log(error);
        this.logger.error(error);
      }
    } else {
      throw new Error(`API version "${version}" is not registered`);
    }
  }

  create() {
    return Router();
  }
}

module.exports = AppRouter;
