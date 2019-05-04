const {Router} = require ('express');
const compression = require ('compression');

function AppRouter({
  httpRequestsLogger,
  errorHandler,
  notFoundHandler,
  logger,
}) {
  const versions = {};
  const root = Router ();
  const api = {
    addVersion (version) {
      versions[version] = Router ();
      const versionRouter = versions[version];
      root.use (`/api/${version}`, versionRouter);
    },

    get rootRouter () {
      return root;
    },

    attach({name, version, path, subRouter}) {
      if (versions[version]) {
        try {
          versions[version].use (`/${path}`, subRouter);
          logger.info (`Router [${name}] registered successfully`);
        } catch (error) {
          logger.error (error);
        }
      } else {
        throw new Error (`API version "${version}" is not registered`);
      }
    },

    create () {
      return Router ();
    },
  };
  root.use (httpRequestsLogger);
  root.use (compression ());
  api.addVersion ('v1');
  versions.v1.get ('/', (req, res) => {
    res.json ({
      name: 'PLM public API',
      version: 'v1',
    });
  });
  root.use (notFoundHandler);
  root.use (errorHandler);

  return api;
}

module.exports = AppRouter;
