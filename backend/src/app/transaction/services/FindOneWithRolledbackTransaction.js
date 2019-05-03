/* eslint-disable import/no-unresolved */
const Utils = require('@core/utils');

class FindOneWithRolledbackTransaction {
  constructor({ TransactionModel }) {
    this.model = TransactionModel;
  }

  execute({ args: { id }, ctx: { user: { teamId } }, options = {} }) {
    return this.model.unscoped().findOne(
      Utils.mergeDeep(
        options,
        { where: { teamId, id } },
      ),
    );
  }
}

module.exports = FindOneWithRolledbackTransaction;
