const account = require ('./account');
const category = require ('./category');
const currency = require ('./currency');
const graphql = require ('./graphql');
const payment = require ('./payment');
const team = require ('./team');
const transaction = require ('./transaction');
const user = require ('./user');
const plan = require ('./plan');
const scheduler = require ('./scheduler');

const equip = container => [
  account(container),
  category(container),
  currency(container),
  graphql(container),
  payment(container),
  team(container),
  transaction(container),
  user(container),
  plan(container),
  scheduler(container),
];

const execute = action => (moduleFactory = {}) => {
  if (typeof moduleFactory[action] === 'function') {
    moduleFactory[action] ();
  }
};

const register = execute ('register');
const run = execute ('run');

module.exports = container => {
  const modules = equip(container);
  modules.forEach (register);
  modules.forEach (run);
};
