const Sequelize = require('sequelize');

class SequelizeAdapter {
  constructor({ config, logger }) {
    this.logger = logger;
    this.models = {};
    const { db } = config;
    if (db) {
      this.db = new Sequelize(db);
    } else {
      logger.info('Database configuration not found, disabling database.');
    }
  }

  registerModel(tableName, schemaDefinition, modelOptions = {}) {
    this.models[tableName] = this.db.define(tableName, schemaDefinition, {
      ...modelOptions,
    });
  }
}
module.exports = SequelizeAdapter;
