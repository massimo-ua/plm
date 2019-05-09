const {CronJob} = require ('cron');

module.exports = ({ logger }) => {
  const jobs = new Map ();
  return {
    add (name, ...job) {
      const [schedule] = job;
      if (jobs.has (name)) {
        jobs.get (name).stop ();
      }
      jobs.set (name, new CronJob (...job));
      logger.info(`Added job "${ name }" with schedule "${ schedule }"`);
    },
    job (name) {
      return jobs.has (name) ? jobs.get (name) : null;
    },
  };
};
