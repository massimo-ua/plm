const Sequelize = require('sequelize');

class SequelizeAdapter {
  constructor({ config, logger }) {
    this.logger = logger;
    const { db } = config;
    if (db) {
      this.db = new Sequelize(db);
    } else {
      logger.info('Database configuration not found, disabling database.');
    }
  }

  registerModel(creatorFn) {
    creatorFn(this.db, Sequelize, this.db.models);
  }

  get models() {
    return this.db.models;
  }
}
module.exports = SequelizeAdapter;
