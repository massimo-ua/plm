const today = new Date();
const tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1);

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('CurrencyRates', [
    {
      id: 1,
      currencyId: 2,
      effectiveDate: new Date('2018-12-31'),
      exchangeRate: 26.33,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      currencyId: 3,
      effectiveDate: new Date('2018-12-31'),
      exchangeRate: 29.05,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      currencyId: 2,
      effectiveDate: today,
      exchangeRate: 28.09,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      currencyId: 3,
      effectiveDate: today,
      exchangeRate: 30.69,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      currencyId: 2,
      effectiveDate: tommorow,
      exchangeRate: 28.33,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      currencyId: 3,
      effectiveDate: today,
      exchangeRate: 31.05,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('CurrencyRates', null, {}),
};
