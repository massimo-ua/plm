const runner = require('./MiddlewareRunner');

const combineParams = (args = {}, { user, query = {} }, additionalContext = {}) => ({
  ...args,
  ...query,
  user,
  ...additionalContext,
});

const resolver = (handler, middleware, additionalContext) => (root, args, ctx) => {
  const combinedCtx = combineParams(args, ctx, additionalContext);
  runner(middleware, combinedCtx);
  return handler(combinedCtx);
};

const wrapper = (
  requestHandler,
  middleware = [],
  additionalContext = {},
  resolverFn = resolver,
) => resolverFn(requestHandler, middleware, additionalContext);

module.exports = wrapper;
