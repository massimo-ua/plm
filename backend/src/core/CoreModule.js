class CoreModule {
  constructor({
    logger,
    appRouter,
    db,
  }) {
    this.logger = logger;
    this.router = appRouter;
    this.db = db;
  }

  addModuleHttpAPI(moduleRouter) {
    try {
      this.router.attach(moduleRouter);
      this.logger.info(`Module [${moduleRouter.name}] registered successfully`);
    } catch (error) {
      this.logger.error(error);
    }
  }
}

module.exports = CoreModule;
