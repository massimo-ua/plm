const Plan = require('./plan.model');

module.exports = container => container.db.registerModel(Plan(container));
