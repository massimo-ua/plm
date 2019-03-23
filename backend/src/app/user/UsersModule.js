const modelsCreator = require('./models');
const serviceCreator = require('./services');
const { comparePassword } = require('./helpers');

module.exports = {
  register(container) {
    const { jwt, crypto } = container;
    modelsCreator(container);
    const { User } = db.models;
    container.register('Users', serviceCreator(User, { jwt, crypto, comparePassword }));
  },
};
