const {
  GraphQLObjectType,
} = require('graphql');
const { Resolver, QueryShowFactory } = require('../helpers');

module.exports = ({
  Payment,
  Payments,
  auth,
}) => ({
  payments: {
    type: new GraphQLObjectType({
      name: 'PaymentQuery',
      description: 'Payment query schema',
      fields: {
        ...QueryShowFactory({
          Type: Payment,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Payments.findOne),
        }),
      },
    }),
    resolve: () => true,
  },
});
