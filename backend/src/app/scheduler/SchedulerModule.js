module.exports = {
  run(container) {
      container.logger.info('SchedulerModule');
      (async () => {
        try {
          const rates = await container.CurrencyExchange.getCurrentRates();
          container.logger.info(rates);
        } catch(error) {
          container.logger.error(error.message);
        }
      })();
  },
};