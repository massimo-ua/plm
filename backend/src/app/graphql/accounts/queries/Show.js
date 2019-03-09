const { QueryShowFactory } = require('../../helpers');

module.exports = ({ AccountType, resolve }) => QueryShowFactory({
  Type: AccountType,
  resolve,
});
