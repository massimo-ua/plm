const CreateTransaction = require('./CreateTransaction');
const UpdateTransaction = require('./UpdateTransaction');
const DeleteTransaction = require('./DeleteTransaction');
const FindTransaction = require('./FindTransaction');
const FindOneTransaction = require('./FindOneTransaction');

module.exports = (...args) => ({
  create: new CreateTransaction(...args),
  update: new UpdateTransaction(...args),
  remove: new DeleteTransaction(...args),
  find: new FindTransaction(...args),
  findOne: new FindOneTransaction(...args),
});
