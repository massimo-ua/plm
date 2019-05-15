const CreatePlan = require ('./CreatePlan');
const UpdatePlan = require ('./UpdatePlan');
const DeletePlan = require ('./DeletePlan');
const FindPlan = require ('./FindPlan');
const FindOnePlan = require ('./FindOnePlan');
const ExpectedAmount = require ('./ExpectedAmount');
const FindRelatedAccounts = require('./FindRelatedAccounts');

module.exports = container => ({
  create: new CreatePlan (container),
  update: new UpdatePlan (container),
  remove: new DeletePlan (container),
  find: new FindPlan (container),
  findOne: new FindOnePlan (container),
  expectedAmount: new ExpectedAmount (container),
  findRelatedAccounts: new FindRelatedAccounts(container),
});
