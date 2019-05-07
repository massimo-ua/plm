const CurrencyRatesUpdater = require('./currency-rates-updater');

module.exports = container => {
    const { config: { rates }, scheduler } = container;
    scheduler.add(
        'CurrencyRatesUpdater',
        rates.update_cron_schedule,
        CurrencyRatesUpdater(container),
        null,
        rates.autostart,
        rates.update_cron_tz,
    );
};
