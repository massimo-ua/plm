class FindPlan {
  constructor({PlanModel}) {
    this.model = PlanModel;
  }

  async execute({args: {id}, ctx: {user}}) {
    const {teamId} = user;
    const { accounts = [] } = await this.model.findOne ({
      include: ['accounts'],
      where: {id, teamId},
    });
    return accounts;
  }
}

module.exports = FindPlan;
