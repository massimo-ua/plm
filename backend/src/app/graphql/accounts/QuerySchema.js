const {
  GraphQLObjectType,
} = require('graphql');
const Account = require('./Account');
const { Resolver } = require('../helpers');
const { List, Show } = require('./queries');

module.exports = ({
  find,
  findOne,
  findTeam,
  findCurrency,
}, {
  loggedIn,
}) => {
  const AccountType = Account({ findTeam, findCurrency });
  return {
    accounts: {
      type: new GraphQLObjectType({
        name: 'AccountQuery',
        description: 'Account query schema',
        fields: {
          ...List({
            AccountType,
            resolve: Resolver().middleware(loggedIn).resolve(find),
          }),
          ...Show({
            AccountType,
            resolve: Resolver().middleware(loggedIn).resolve(findOne),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
