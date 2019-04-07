/* eslint-disable import/no-unresolved */
const { Delete } = require('@core/services');

class DeletePlan extends Delete {
    constructor({ PlanModel }) {
        super(PlanModel);
    }
}

module.exports = DeletePlan;
