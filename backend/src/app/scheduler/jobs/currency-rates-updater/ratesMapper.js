/* eslint-disable camelcase */
const getAvgRate = require ('./getAvgRate');

module.exports = map => ({ccy, buy, sale, base_ccy}) => {
  map.set (ccy, {base: base_ccy, rate: getAvgRate (buy, sale)});
};
