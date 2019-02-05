const bcrypt = require('bcrypt');

const hash = password => bcrypt.hash(password, 10);
const compare = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

module.exports = {
  hash,
  compare,
};
