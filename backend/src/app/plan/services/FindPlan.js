/* eslint-disable import/no-unresolved */
const { Find } = require('@core/services');

class FindPlan extends Find {
    constructor({ PlanModel }) {
        super(PlanModel);
    }
}

module.exports = FindPlan;
