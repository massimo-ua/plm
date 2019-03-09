const { QueryListFactory } = require('../../helpers');

module.exports = ({ TransactionType, resolve }) => QueryListFactory({
  Type: TransactionType,
  resolve,
});
