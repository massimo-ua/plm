const FindCategory = require('./FindCategory');
const FindOneCategory = require('./FindOneCategory');
const CreateCategory = require('./CreateCategory');
const UpdateCategory = require('./UpdateCategory');

module.exports = (...args) => ({
  find: new FindCategory(...args),
  findOne: new FindOneCategory(...args),
  create: new CreateCategory(...args),
  update: new UpdateCategory(...args),
});
