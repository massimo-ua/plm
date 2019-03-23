const modelsCreator = require('./models');
const serviceCreator = require('./services');

module.exports = {
  register(container) {
    const { db } = core;
    modelsCreator(db);
    const { Team } = db.models;
    container.register('Teams', serviceCreator(Team));
  },
};
