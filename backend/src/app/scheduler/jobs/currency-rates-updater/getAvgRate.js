module.exports = (buy, sale) =>
  Math.round ((parseFloat (buy) + parseFloat (sale)) * 50) / 100;
