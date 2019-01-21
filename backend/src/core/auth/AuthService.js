const check = (rules = {}, ctx = {}) => Object.keys(rules).reduce((acc, key) => {
  if (Object.prototype.hasOwnProperty.apply(ctx, key)) {
    return acc && ctx[key] === rules[key];
  }
  return false;
}, true);
module.exports = {
  check,
};
