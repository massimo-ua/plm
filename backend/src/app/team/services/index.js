const FindOneTeam = require('./FindOneTeam');

module.exports = container => ({
  findOne: new FindOneTeam(container),
});
