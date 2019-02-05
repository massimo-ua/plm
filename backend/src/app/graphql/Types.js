const { UserTypes } = require('./users');
const { TeamTypes } = require('./teams');
const { CategoryTypes } = require('./categories');

module.exports.Types = [
  ...UserTypes,
  ...TeamTypes,
  ...CategoryTypes,
];
