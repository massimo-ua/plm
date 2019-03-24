const { QueryListFactory } = require('../../helpers');

module.exports = (Type, resolve) => QueryListFactory({
  Type,
  resolve,
});
