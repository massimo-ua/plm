const CreateAccount = require('./CreateAccount');
const DeleteAccount = require('./DeleteAccount');
const FindAccount = require('./FindAccount');
const FindOneAccount = require('./FindOneAccount');
const UpdateAccount = require('./UpdateAccount');

module.exports = (...args) => ({
  create: new CreateAccount(...args),
  remove: new DeleteAccount(...args),
  find: new FindAccount(...args),
  findOne: new FindOneAccount(...args),
  update: new UpdateAccount(...args),
});
