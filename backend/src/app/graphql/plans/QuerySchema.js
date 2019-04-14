const {
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');
const { List, Show } = require('./queries');

module.exports = ({
  Plan,
  Plans,
  auth,
}) => ({
  plans: {
    type: new GraphQLObjectType({
      name: 'PlanQuery',
      description: 'Plan query schema',
      fields: {
        ...List(
          Plan,
          Resolver().middleware(auth.loggedIn).resolve(Plans.find),
        ),
        ...Show(
          Plan,
          Resolver().middleware(auth.loggedIn).resolve(Plans.findOne),
        ),
      },
    }),
    resolve: () => true,
  },
});
