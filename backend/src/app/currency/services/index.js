const FindCurrency = require('./FindCurrency');
const FindOneCurrency = require('./FindOneCurrency');
const CreateCurrency = require('./CreateCurrency');
const UpdateCurrency = require('./UpdateCurrency');
const DeleteCurrency = require('./DeleteCurrency');
const SetAsHomeCurrency = require('./SetAsHomeCurrency');

module.exports = (...args) => ({
  find: new FindCurrency(...args),
  findOne: new FindOneCurrency(...args),
  create: new CreateCurrency(...args),
  update: new UpdateCurrency(...args),
  remove: new DeleteCurrency(...args),
  setAsHome: new SetAsHomeCurrency(...args),
});
