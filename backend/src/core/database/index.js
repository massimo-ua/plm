/* eslint-disable import/no-unresolved */
const config = require('@config');
const logger = require('../logger');
const SequelizeAdapter = require('./SequelizeAdapter');

module.exports = new SequelizeAdapter({ config, logger });
