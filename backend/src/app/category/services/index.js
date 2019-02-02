const FindCategory = require('./FindCategory');

module.exports = (...args) => ({
  find: new FindCategory(...args),
});
