const runner = require('./MiddlewareRunner');

function Resolver(middlewareRunner = runner) {
  this.combinedCtx = {};
  this.middlewares = [];
  this.middlewareRunner = middlewareRunner;
}

function resolve(handler) {
  return (parent, args, ctx, info) => {
    const combinedCtx = { ...ctx, ...this.combinedCtx };
    this.middlewareRunner(this.middlewares, combinedCtx);
    const resolverCtx = {
      parent,
      args,
      ctx: combinedCtx,
      info,
    };
    return this.mapperFn ? handler.execute(this.mapperFn(resolverCtx))
      : handler.execute(resolverCtx);
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

function mapper(mapperFn) {
  this.mapperFn = mapperFn;
  return this;
}

Resolver.prototype.context = context;

Resolver.prototype.middleware = middleware;

Resolver.prototype.mapper = mapper;

Resolver.prototype.resolve = resolve;

module.exports = () => new Resolver();
