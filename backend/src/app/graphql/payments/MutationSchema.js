const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
  Update,
  Rollback,
} = require('./mutations');
const { Resolver } = require('../helpers');

module.exports = ({
  Payment,
  Payments,
  auth,
}) => ({
  payments: {
    type: new GraphQLObjectType({
      name: 'PaymentMutation',
      description: 'Payment mutation schema',
      fields: {
        ...Create(
          Payment,
          Resolver().middleware(auth.loggedIn).resolve(Payments.create),
        ),
        ...Update(
          Payment,
          Resolver().middleware(auth.loggedIn).resolve(Payments.update),
        ),
        ...Rollback(
          Payment,
          Resolver().middleware(auth.loggedIn).resolve(Payments.rollback),
        ),
      },
    }),
    resolve: () => true,
  },
});
