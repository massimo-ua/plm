const { Find } = require('../../services');

class FindUser extends Find {
  constructor(model) {
    super(model, {
      include: ['team'],
    });
  }
}

module.exports = FindUser;
