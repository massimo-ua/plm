const FindUser = require('./FindUser');
const FindOneUser = require('./FindOneUser');
const Signup = require('./Signup');
const Login = require('./Login');
const Profile = require('./Profile');
const UpdateProfile = require('./UpdateProfile');
const UpdateUser = require('./UpdateUser');

module.exports = (...args) => ({
  find: new FindUser(...args),
  findOne: new FindOneUser(...args),
  signup: new Signup(...args),
  login: new Login(...args),
  profile: new Profile(...args),
  updateProfile: new UpdateProfile(...args),
  updateUser: new UpdateUser(...args),
});
