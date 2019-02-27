/* eslint-disable import/no-unresolved */
const { FindOne } = require('@core/services');
const { mergeDeep } = require('@core/utils');

class FindOneCurrency extends FindOne {
  execute({ parent = {}, args = {}, options = {} }) {
    const id = parent.currencyId || args.id;
    return this.model.findOne(
      mergeDeep(
        { ...this.defaultOptions, ...options },
        { where: { id } },
      ),
    );
  }
}

module.exports = FindOneCurrency;
