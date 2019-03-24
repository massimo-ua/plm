const modelsCreator = require('./models');
const serviceCreator = require('./services');
const { comparePassword } = require('./helpers');

module.exports = {
  register(container) {
    container.register('comparePassword', comparePassword);
    container.register('UserModel', modelsCreator, ['db', 'TeamModel', 'crypto'])
    container.register('Users', serviceCreator, ['UserModel', 'jwt', 'crypto', 'comparePassword']);
  },
};
