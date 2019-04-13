/* eslint-disable import/no-unresolved */
const { Update } = require('@core/services');
const { planDailyTarget } = require('../helpers');

class UpdatePlan extends Update {
  constructor({
    PlanModel,
  }) {
    super(PlanModel);
  }

  async execute({ args: { id, ...body }, ctx: { user } }) {
    const { teamId } = user;
    const plan = await this.model.findOne({
      where: {
        id,
        teamId,
      },
    });
    if (plan) {
      Object.assign(plan, body);
      plan.dailyAmount = planDailyTarget(plan.startDate, plan.endDate, plan.targetAmount);
      await plan.save();
      return plan;
    }
    throw new Error('Record not found');
  }
}

module.exports = UpdatePlan;
