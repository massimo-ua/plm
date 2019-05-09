const mapperFactory = require ('./ratesMapper');

function UpdateCurrencyRatesFactory({CurrencyExchange, Currencies, logger}) {
  return async function currencyRatesUpdater () {
    try {
      const receivedRates = await CurrencyExchange.getCurrentRates ();
      const rates = new Map ();
      const mapper = mapperFactory (rates);
      receivedRates.forEach(mapper);

      const currencies = await Currencies.find.execute ({});
      const promises = currencies.reduce ((acc, currency) => {
        if (rates.has (currency.shortName)) {
          const {rate} = rates.get (currency.shortName);
          acc.push (
            Currencies.setExchangeRate.execute ({
              args: {
                currencyId: currency.id,
                effectiveDate: new Date (),
                exchangeRate: rate,
              },
            })
          );
        }
        return acc;
      }, []);
      await Promise.all (promises);
      logger.info (`Currency rates successfully updated`);
    } catch (error) {
      logger.error (error.message);
    }
  };
}
module.exports = UpdateCurrencyRatesFactory;

