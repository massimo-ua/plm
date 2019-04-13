/* eslint-disable import/no-unresolved */
const { Create } = require('@core/services');
const { planDailyTarget } = require('../helpers');

class CreatePlan extends Create {
  constructor({
    PlanModel,
    Accounts,
    db,
  }) {
    super(PlanModel);
    this.db = db.db;
    this.accounts = Accounts;
  }

  async execute({ args, ctx: { user } }) {
    try {
      return await this.db.transaction(async (transaction) => {
        const { teamId } = user;
        const {
          currencyId,
          name,
          startDate,
          endDate,
          targetAmount,
        } = args;
        const plan = await this.model.create({
          name,
          startDate,
          endDate,
          targetAmount,
          dailyAmount: planDailyTarget(startDate, endDate, targetAmount),
          teamId,
        }, { transaction });
        const account = await this.accounts.create.execute({
          args: {
            name: `1 ${name}`,
            type: 'S',
            currencyId,
            balance: 0,
            teamId,
          },
          ctx: { user },
        });
        plan.addAccounts(account);
        return plan;
      });
    } catch (error) {
      throw new Error('PLAN_CREATION_FAILED');
    }
  }
}

module.exports = CreatePlan;
