const runner = require('./MiddlewareRunner');

const resolver = (handler, middleware, additionalContext) => (root, args, ctx) => {
  const combinedCtx = { ...ctx, ...additionalContext };
  runner(middleware, combinedCtx);
  return handler(args, combinedCtx);
};

const wrapper = (
  requestHandler,
  middleware = [],
  additionalContext = {},
  resolverFn = resolver,
) => resolverFn(requestHandler, middleware, additionalContext);

module.exports = wrapper;
