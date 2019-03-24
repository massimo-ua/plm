const Team = require('./team.model');

module.exports = container => {
  return container.db.registerModel(Team(container));
};
