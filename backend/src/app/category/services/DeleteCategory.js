/* eslint-disable import/no-unresolved */
const { Delete } = require('@core/services');

class DeleteCategory extends Delete {
    constructor({ CategoryModel }) {
        super(CategoryModel);
    }
}

module.exports = DeleteCategory;
