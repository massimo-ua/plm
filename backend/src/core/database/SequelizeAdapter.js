const Sequelize = require ('sequelize');

class SequelizeAdapter {
  constructor({config, logger}) {
    this.logger = logger;
    const {db} = config;
    if (db) {
      this.db = new Sequelize (db);
      this.Op = Sequelize.Op;
    } else {
      logger.info ('Database configuration not found, disabling database.');
    }
  }

  registerModel (creatorFn) {
    return creatorFn (this.db, Sequelize);
  }
}
module.exports = SequelizeAdapter;
