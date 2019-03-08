const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
  Update,
  Delete,
} = require('./mutations');
const { Resolver } = require('../helpers');
const Account = require('./Account');

module.exports = ({
  Teams,
  Accounts,
  Currencies,
  Auth,
}) => {
  const AccountType = Account({ Teams, Currencies });
  return {
    accounts: {
      type: new GraphQLObjectType({
        name: 'AccountMutation',
        description: 'Account mutation schema',
        fields: {
          ...Create({
            AccountType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Accounts.create),
          }),
          ...Update({
            AccountType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Accounts.update),
          }),
          ...Delete({
            AccountType,
            resolve: Resolver().middleware(Auth.loggedIn).resolve(Accounts.remove),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
