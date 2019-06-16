module.exports = {
  up: queryInterface => queryInterface.bulkInsert('CurrencyRates', [
    {
      id: 1,
      currencyId: 1,
      effectiveDate: '2019-01-01',
      exchangeRate: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      currencyId: 2,
      effectiveDate: '2019-01-01',
      exchangeRate: 28.11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      currencyId: 3,
      effectiveDate: '2019-01-01',
      exchangeRate: 32.19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('CurrencyRates', null, {}),
};
