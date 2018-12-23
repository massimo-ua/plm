const Sequelize = require('sequelize');

class SequelizeAdapter {
  constructor({ config, logger }) {
    this.logger = logger;
    this.modelsRegistry = {};
    const { db } = config;
    if (db) {
      this.db = new Sequelize(db);
    } else {
      logger.info('Database configuration not found, disabling database.');
    }
  }

  registerModel(schemaDefinition, modelName, modelOptions = {}) {
    this.modelsRegistry[modelName] = this.db.define(modelName, schemaDefinition, modelOptions);
  }

  get models() {
    return this.modelsRegistry;
  }
}
module.exports = SequelizeAdapter;
