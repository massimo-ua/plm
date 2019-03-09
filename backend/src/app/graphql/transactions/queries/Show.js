const { QueryShowFactory } = require('../../helpers');

module.exports = ({ TransactionType, resolve }) => QueryShowFactory({
  Type: TransactionType,
  resolve,
});
