const { QueryListFactory } = require('../../helpers');

module.exports = ({ Transaction, resolve }) => QueryListFactory({
  Type: Transaction,
  resolve,
});
