const mirrorMapper = require('./mirrorMapper');
const accountMapper = require('./accountMapper');
const teamMapper = require('./teamMapper');
const currencyMapper = require('./currencyMapper');
const categoryMapper = require('./categoryMapper');
const transactionMapper = require('./transactionMapper');
const transactionPaymentsMapper = require('./transactionPaymentsMapper');
const transactionRateMapper = require('./transactionRateMapper');
const selfMapper = require('./selfMapper');

module.exports = {
  selfMapper,
  teamMapper,
  mirrorMapper,
  accountMapper,
  currencyMapper,
  categoryMapper,
  transactionMapper,
  transactionRateMapper,
  transactionPaymentsMapper,
};
