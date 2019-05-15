const {FindOne} = require ('../../../core/services');

class FindOneTeam extends FindOne {
  constructor({TeamModel}) {
    super (TeamModel);
  }

  execute({args: {id} = {}, options = {}}) {
    return this.model.findByPk (id, {...this.defaultOptions, ...options});
  }
}

module.exports = FindOneTeam;
