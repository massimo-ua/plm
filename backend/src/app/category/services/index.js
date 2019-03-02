const FindCategory = require('./FindCategory');
const FindOneCategory = require('./FindOneCategory');
const CreateCategory = require('./CreateCategory');
const UpdateCategory = require('./UpdateCategory');
const DeleteCategory = require('./DeleteCategory');

module.exports = (...args) => ({
  find: new FindCategory(...args),
  findOne: new FindOneCategory(...args),
  create: new CreateCategory(...args),
  update: new UpdateCategory(...args),
  remove: new DeleteCategory(...args),
});
