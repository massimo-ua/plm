const {CronJob} = require ('cron');

module.exports = () => {
  const jobs = new Map ();
  return {
    add (name, ...job) {
      if (jobs.has (name)) {
        jobs.get (name).stop ();
      }
      jobs.set (name, new CronJob (...job));
    },
    job (name) {
      return jobs.has (name) ? jobs.get (name) : null;
    },
  };
};
