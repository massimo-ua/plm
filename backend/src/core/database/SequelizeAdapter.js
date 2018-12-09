const Sequelize = require('sequelize');

class SequelizeAdapter {
  constructor({ config, logger }) {
    this.logger = logger;
    this.models = {};
    const { db } = config;
    if (db) {
      this.db = new Sequelize(this.config);
    } else {
      logger.info('Database configuration not found, disabling database.');
    }
  }

  registerModel(schemaDefinition, modelName, modelOptions = {}) {
    this.models[modelName] = this.db.define(modelName, schemaDefinition, modelOptions);
  }

  get models() {
    return this.models;
  }
}
module.exports = SequelizeAdapter;
