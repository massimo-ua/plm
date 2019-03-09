const { QueryListFactory } = require('../../helpers');

module.exports = ({ AccountType, resolve }) => QueryListFactory({
  Type: AccountType,
  resolve,
});
