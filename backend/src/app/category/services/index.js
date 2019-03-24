const FindCategory = require('./FindCategory');
const FindOneCategory = require('./FindOneCategory');
const CreateCategory = require('./CreateCategory');
const UpdateCategory = require('./UpdateCategory');
const DeleteCategory = require('./DeleteCategory');

module.exports = container => ({
  find: new FindCategory(container),
  findOne: new FindOneCategory(container),
  create: new CreateCategory(container),
  update: new UpdateCategory(container),
  remove: new DeleteCategory(container),
});
