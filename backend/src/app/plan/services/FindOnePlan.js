/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');

class FindOnePlan extends FindOne {
    constructor({ PlanModel }) {
        super(PlanModel);
    }
}

module.exports = FindOnePlan;
