const Team = require('./team.model');

module.exports = db => {
  db.registerModel(Team);
};
