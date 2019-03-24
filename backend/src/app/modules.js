const account = require('./account');
const category = require('./category');
const currency = require('./currency');
const graphql = require('./graphql');
const payment = require('./payment');
const team = require('./team');
const transaction = require('./transaction');
const user = require('./user');

const modules = [
    account,
    category,
    currency,
    graphql,
    payment,
    team,
    transaction,
    user,
];

const execute = action => container => (moduleFactory = {}) => {
    if (typeof moduleFactory[action] === 'function') {
        moduleFactory[action](container);
    }
};

const register = execute('register');
const run = execute('run');

module.exports = container => {
    modules.forEach(register(container));
    modules.forEach(run(container));
};