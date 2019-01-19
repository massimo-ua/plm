class CoreModule {
  constructor({
    logger,
    appRouter,
    db,
    crypto,
    jwt,
  }) {
    this.logger = logger;
    this.router = appRouter;
    this.db = db;
    this.apis = {};
    this.utils = {
      crypto,
      jwt,
    };
  }

  registerRouter(moduleRouter) {
    try {
      this.router.attach(moduleRouter);
      this.logger.info(`Router [${moduleRouter.name}] registered successfully`);
    } catch (error) {
      this.logger.error(error);
    }
  }

  registerAPI({ namespace, api }) {
    this.apis[namespace] = api;
    this.logger.info(`API namespace [${namespace}] registered successfully`);
  }

  get modules() {
    return this.apis;
  }
}

module.exports = CoreModule;
