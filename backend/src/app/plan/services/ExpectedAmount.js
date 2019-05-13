/* eslint-disable import/no-unresolved */
const Utils = require ('@core/utils');
const {planExpectedAmount} = require ('../helpers');

class ExpectedAmount {
  constructor({PlanModel}) {
    this.model = PlanModel;
  }

  async execute({args: {id}, ctx: {user}, options = {}}) {
    const {teamId} = user;
    const plan = await this.model.findOne (
      Utils.mergeDeep (
        {...this.defaultOptions, ...options},
        {where: {teamId, id}}
      )
    );
    if (plan) {
      const {startDate, endDate, dailyAmount} = plan;
      return planExpectedAmount (startDate, endDate, dailyAmount);
    }
    throw new Error ('Record not found');
  }
}

module.exports = ExpectedAmount;
