/* eslint-disable import/no-unresolved */
const Utils = require ('@core/utils');

class FindOne {
  constructor (model, defaultOptions = {}) {
    this.model = model;
    this.defaultOptions = defaultOptions;
    this.execute = this.execute.bind (this);
  }

  execute({args: {id}, ctx: {user}, options = {}}) {
    const {teamId} = user;
    return this.model.findOne (
      Utils.mergeDeep (
        {...this.defaultOptions, ...options},
        {where: {teamId, id}}
      )
    );
  }
}

module.exports = FindOne;
