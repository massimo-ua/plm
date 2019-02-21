const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
  Update,
  Delete,
  SetAsHome,
} = require('./mutations');
const { Resolver } = require('../helpers');
const CurrencyType = require('./Currency');

module.exports = ({
  create,
  update,
  remove,
  setAsHome,
}, {
  loggedIn,
  isAdmin,
}) => ({
  categories: {
    type: new GraphQLObjectType({
      name: 'CurrencyMutation',
      description: 'Currency mutation schema',
      fields: {
        ...Create({
          CurrencyType,
          resolver: Resolver().middleware(loggedIn, isAdmin).resolve(create),
        }),
        ...Update({
          CurrencyType,
          resolver: Resolver().middleware(loggedIn, isAdmin).resolve(update),
        }),
        ...Delete({
          CurrencyType,
          resolver: Resolver().middleware(loggedIn, isAdmin).resolve(remove),
        }),
        ...SetAsHome({
          CurrencyType,
          resolver: Resolver().middleware(loggedIn, isAdmin).resolve(setAsHome),
        }),
      },
    }),
    resolve: () => true,
  },
});
