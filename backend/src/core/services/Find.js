/* eslint-disable import/no-unresolved */
const Utils = require('@core/utils');

class Find {
  constructor(model, defaultOptions = {}) {
    this.model = model;
    this.defaultOptions = defaultOptions;
    this.execute = this.execute.bind(this);
  }

  execute(options = {}, { user }) {
    const { teamId } = user;
    return this.model.findAll(Utils.mergeDeep(this.defaultOptions, options, { teamId }));
  }
}

module.exports = Find;
