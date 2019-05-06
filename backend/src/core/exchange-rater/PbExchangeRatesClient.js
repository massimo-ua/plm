const https = require ('https');

const PbExchangeRatesFactory = ({config}) => {
  const {rates = {}} = config;
  return {
    getCurrentRates () {
      return new Promise ((resolve, reject) => {
        https
          .get (rates.url, response => {
            let data = '';
            response.on ('data', chunk => {
              data += chunk;
            });
            response.on ('end', () => {
              resolve (data);
            });
          })
          .on ('error', error => {
            reject (error);
          });
      });
    },
  };
};

module.exports = PbExchangeRatesFactory;
