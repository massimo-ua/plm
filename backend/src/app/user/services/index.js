const FindUser = require ('./FindUser');
const FindOneUser = require ('./FindOneUser');
const Signup = require ('./Signup');
const Login = require ('./Login');
const Profile = require ('./Profile');
const UpdateProfile = require ('./UpdateProfile');
const UpdateUser = require ('./UpdateUser');

module.exports = container => ({
  find: new FindUser (container),
  findOne: new FindOneUser (container),
  signup: new Signup (container),
  login: new Login (container),
  profile: new Profile (container),
  updateProfile: new UpdateProfile (container),
  update: new UpdateUser (container),
});
