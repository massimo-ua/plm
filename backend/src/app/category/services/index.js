const FindCategory = require('./FindCategory');
const FindOneCategory = require('./FindOneCategory');
const CreateCategory = require('./CreateCategory');

module.exports = (...args) => ({
  find: new FindCategory(...args),
  findOne: new FindOneCategory(...args),
  create: new CreateCategory(...args),
});
