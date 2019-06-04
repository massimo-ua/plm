const jobs = require ('./jobs');

module.exports = container => ({
  run () {
    jobs (container);
  },
});
