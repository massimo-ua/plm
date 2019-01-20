const defaultOptions = {
  authRequired: true,
};

const checkAuthorization = (authRequired, { user }) => (authRequired ? !!user : true);

const resolver = (handler, { authRequired }) => (root, args, ctx) => {
  if (checkAuthorization(authRequired, ctx)) {
    return handler(args, ctx);
  }
  throw new Error('Not Authorized');
};

const wrapper = (
  requestHandler,
  options = defaultOptions,
  resolverFn = resolver,
) => resolverFn(requestHandler, options);

module.exports = wrapper;
