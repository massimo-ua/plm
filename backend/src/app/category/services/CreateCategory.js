/* eslint-disable import/no-unresolved */
const { Create } = require('@core/services');

class CreateCategory extends Create {
    constructor({ CategoryModel }) {
        super(CategoryModel);
    }
}

module.exports = CreateCategory;
