class CoreModule {
  constructor({
    logger,
    appRouter,
    db,
  }) {
    this.logger = logger;
    this.router = appRouter;
    this.db = db;
    this.APIs = {};
  }

  registerRouter(moduleRouter) {
    try {
      this.router.attach(moduleRouter);
      this.logger.info(`Module [${moduleRouter.name}] registered successfully`);
    } catch (error) {
      this.logger.error(error);
    }
  }

  registerAPI({ namespace, api }) {
    this.APIs[namespace] = api;
    this.logger.info(`API namespace [${namespace}] registered successfully`);
  }

  get modules() {
    return this.APIs;
  }
}

module.exports = CoreModule;
