const CreatePlan = require('./CreatePlan');
const UpdatePlan = require('./UpdatePlan');
const DeletePlan = require('./DeletePlan');
const FindPlan = require('./FindPlan');
const FindOnePlan = require('./FindOnePlan');

module.exports = container => ({
  create: new CreatePlan(container),
  update: new UpdatePlan(container),
  remove: new DeletePlan(container),
  find: new FindPlan(container),
  findOne: new FindOnePlan(container),
});
