const { QueryListFactory } = require('../../helpers');

module.exports = ({ Account, resolve }) => QueryListFactory({
  Type: Account,
  resolve,
});
