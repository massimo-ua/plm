const FindCategory = require('./FindCategory');
const FindOneCategory = require('./FindOneCategory');

module.exports = (...args) => ({
  find: new FindCategory(...args),
  findOne: new FindOneCategory(...args),
});
