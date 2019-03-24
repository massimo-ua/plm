/* eslint-disable import/no-unresolved */
const { Update } = require('@core/services');

class UpdateCategory extends Update {
    constructor({ CategoryModel }) {
        super(CategoryModel);
    }
}

module.exports = UpdateCategory;
