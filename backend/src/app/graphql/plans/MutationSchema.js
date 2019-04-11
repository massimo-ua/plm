const {
  GraphQLObjectType,
} = require('graphql');
const {
  Create,
} = require('./mutations');
const { Resolver } = require('../helpers');

module.exports = ({
  Plan,
  Plans,
  auth,
}) => ({
  plans: {
    type: new GraphQLObjectType({
      name: 'PlanMutation',
      description: 'Plan mutation schema',
      fields: {
        ...Create({
          Plan,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Plans.create),
        }),
      },
    }),
    resolve: () => true,
  },
});
