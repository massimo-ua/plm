/* eslint-disable import/no-unresolved */
const config = require('@config');
const jwt = require('./jwt');

module.exports = jwt(config);
