/* eslint-disable import/no-unresolved */
const { Update } = require('@core/services');

class UpdatePlan extends Update {
  constructor({ PlanModel }) {
    super(PlanModel);
  }
}

module.exports = UpdatePlan;
