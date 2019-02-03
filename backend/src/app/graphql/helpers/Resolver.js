const runner = require('./MiddlewareRunner');

function Resolver(middlewareRunner = runner) {
  this.combinedCtx = {};
  this.middlewares = [];
  this.middlewareRunner = middlewareRunner;
}

function resolve(handler) {
  return (root, args, ctx) => {
    const combinedCtx = { ...ctx, ...this.combinedCtx };
    this.middlewareRunner(this.middlewares, combinedCtx);
    return handler({ args, ctx: combinedCtx });
  };
}

function context(ctx) {
  this.combinedCtx = { ...this.combinedCtx, ...ctx };
  return this;
}

function middleware(...args) {
  this.middlewares = [...this.middlewares, ...args];
  return this;
}

Resolver.prototype.context = context;

Resolver.prototype.middleware = middleware;

Resolver.prototype.resolve = resolve;

module.exports = () => new Resolver();
