const { FindOne } = require('../../services');

class FindOneTeam extends FindOne {
  execute({ args: { id } = {}, options = {} }) {
    return this.model.findByPk(id, { ...this.defaultOptions, ...options });
  }
}

module.exports = FindOneTeam;
