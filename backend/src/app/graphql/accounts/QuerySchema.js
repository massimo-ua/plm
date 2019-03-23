const {
  GraphQLObjectType,
} = require('graphql');

const { Resolver } = require('../helpers');
const { List, Show } = require('./queries');

module.exports = ({
  Account,
  Accounts,
  auth,
}) => ({
  accounts: {
    type: new GraphQLObjectType({
      name: 'AccountQuery',
      description: 'Account query schema',
      fields: {
        ...List({
          Account,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Accounts.find),
        }),
        ...Show({
          Account,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Accounts.findOne),
        }),
      },
    }),
    resolve: () => true,
  },
});
