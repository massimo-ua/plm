const CreateTransaction = require('./CreateTransaction');
const UpdateTransaction = require('./UpdateTransaction');
const DeleteTransaction = require('./DeleteTransaction');
const FindTransaction = require('./FindTransaction');
const FindOneTransaction = require('./FindOneTransaction');

module.exports = container => ({
  create: new CreateTransaction(container),
  update: new UpdateTransaction(container),
  remove: new DeleteTransaction(container),
  find: new FindTransaction(container),
  findOne: new FindOneTransaction(container),
});
