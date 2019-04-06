const Plan = require('./plan.model');

module.exports = container => {
  return container.db.registerModel(Plan(container));
};
