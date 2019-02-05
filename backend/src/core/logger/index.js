/* eslint-disable import/no-unresolved */
const config = require('@config');
const Logger = require('./logger');

module.exports = Logger(config);
