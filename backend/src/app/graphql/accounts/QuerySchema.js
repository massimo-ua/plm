const {
  GraphQLObjectType,
} = require('graphql');
const Account = require('./Account');
const { Resolver } = require('../helpers');
const { List, Show } = require('./queries');

module.exports = ({
  Accounts,
  Currencies,
  Teams,
  Auth,
}) => {
  const AccountType = Account({ Teams, Currencies });
  return {
    accounts: {
      type: new GraphQLObjectType({
        name: 'AccountQuery',
        description: 'Account query schema',
        fields: {
          ...List({
            AccountType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Accounts.find),
          }),
          ...Show({
            AccountType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Accounts.findOne),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
