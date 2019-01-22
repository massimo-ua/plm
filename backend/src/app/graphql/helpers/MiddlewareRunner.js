module.exports = (middleware, ctx) => {
  const middlewaresToRun = Array.isArray(middleware) ? middleware : [middleware];
  middlewaresToRun.forEach((middlewareToRun) => {
    middlewareToRun(ctx);
  });
};
