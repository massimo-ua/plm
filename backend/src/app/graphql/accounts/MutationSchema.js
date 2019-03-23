const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
  Update,
  Delete,
} = require('./mutations');
const { Resolver } = require('../helpers');

module.exports = ({
  Account,
  Accounts,
  auth,
}) => ({
  accounts: {
    type: new GraphQLObjectType({
      name: 'AccountMutation',
      description: 'Account mutation schema',
      fields: {
        ...Create({
          Account,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Accounts.create),
        }),
        ...Update({
          Account,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Accounts.update),
        }),
        ...Delete({
          Account,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Accounts.remove),
        }),
      },
    }),
    resolve: () => true,
  },
});
