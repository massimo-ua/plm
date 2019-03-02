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
  create,
  update,
  remove,
  findTeam,
  findCurrency,
}, {
  loggedIn,
}) => {
  const AccountType = Account({ findTeam, findCurrency });
  return {
    accounts: {
      type: new GraphQLObjectType({
        name: 'AccountMutation',
        description: 'Account mutation schema',
        fields: {
          ...Create({
            AccountType,
            resolve: Resolver().middleware(loggedIn).resolve(create),
          }),
          ...Update({
            AccountType,
            resolve: Resolver().middleware(loggedIn).resolve(update),
          }),
          ...Delete({
            AccountType,
            resolve: Resolver().middleware(loggedIn).resolve(remove),
          }),
        },
      }),
      resolve: () => true,
    },
  };
};
