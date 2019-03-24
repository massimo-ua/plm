const FindCurrency = require('./FindCurrency');
const FindOneCurrency = require('./FindOneCurrency');
const CreateCurrency = require('./CreateCurrency');
const UpdateCurrency = require('./UpdateCurrency');
const DeleteCurrency = require('./DeleteCurrency');
const SetAsHomeCurrency = require('./SetAsHomeCurrency');

module.exports = container => ({
  find: new FindCurrency(container),
  findOne: new FindOneCurrency(container),
  create: new CreateCurrency(container),
  update: new UpdateCurrency(container),
  remove: new DeleteCurrency(container),
  setAsHome: new SetAsHomeCurrency(container),
});
