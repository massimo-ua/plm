const CreateAccount = require('./CreateAccount');
const DeleteAccount = require('./DeleteAccount');
const FindAccount = require('./FindAccount');
const FindOneAccount = require('./FindOneAccount');
const UpdateAccount = require('./UpdateAccount');

module.exports = container => ({
  create: new CreateAccount(container),
  remove: new DeleteAccount(container),
  find: new FindAccount(container),
  findOne: new FindOneAccount(container),
  update: new UpdateAccount(container),
});
