module.exports = () => (sequelize, DataTypes) => {
    const CurrencyRate = sequelize.define('CurrencyRate', {
        currencyId: DataTypes.INTEGER,
        effectiveDate: DataTypes.DATEONLY,
        exchangeRate: DataTypes.FLOAT,
    });
    return CurrencyRate;
  };