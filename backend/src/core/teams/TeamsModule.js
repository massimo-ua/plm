const { Team } = require('./models');
const serviceCreator = require('./services');

module.exports = (core) => {
  const { db } = core;
  db.registerModel(Team);
  const { Team: TeamModel } = db.models;
  const api = serviceCreator(TeamModel);
  core.registerAPI({
    namespace: 'Teams',
    api,
  });
};
