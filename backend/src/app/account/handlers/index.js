const onTransactionCreated = require('./onTransactionCreated');
const onTransactionRolledBack = require('./onTransactionRolledBack');

module.exports = container => {
    onTransactionCreated(container);
    onTransactionRolledBack(container);
};