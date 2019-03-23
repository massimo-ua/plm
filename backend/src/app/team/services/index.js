const FindOneTeam = require('./FindOneTeam');

module.exports = (...args) => ({
  findOne: new FindOneTeam(...args),
});
