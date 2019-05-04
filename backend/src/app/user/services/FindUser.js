const {Find} = require ('../../../core/services');

class FindUser extends Find {
  constructor({UserModel}) {
    super (UserModel);
  }
}

module.exports = FindUser;
