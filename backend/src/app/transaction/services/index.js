const CreateTransaction = require ('./CreateTransaction');
const UpdateTransaction = require ('./UpdateTransaction');
const RollbackTransaction = require ('./RollbackTransaction');
const FindTransaction = require ('./FindTransaction');
const FindOneTransaction = require ('./FindOneTransaction');

module.exports = container => ({
  create: new CreateTransaction (container),
  update: new UpdateTransaction (container),
  rollback: new RollbackTransaction (container),
  find: new FindTransaction (container),
  findOne: new FindOneTransaction (container),
});
