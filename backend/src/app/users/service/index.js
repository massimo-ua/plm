const UserService = require('./UserService');

module.exports = User => new UserService(User);
