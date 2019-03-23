const User = require('./user.model');

module.exports = ({ db, crypto }) => {
    db.registerModel(User({ crypto }));
}

