const jobs = require('./jobs');

module.exports = {
  run(container) {
      jobs(container);
  },
};