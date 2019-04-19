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
  Plan,
  Plans,
  auth,
}) => ({
  plans: {
    type: new GraphQLObjectType({
      name: 'PlanMutation',
      description: 'Plan mutation schema',
      fields: {
        ...Create(
          Plan,
          Resolver().middleware(auth.loggedIn).resolve(Plans.create),
        ),
        ...Update(
          Plan,
          Resolver().middleware(auth.loggedIn).resolve(Plans.update),
        ),
        ...Delete(
          Plan,
          Resolver().middleware(auth.loggedIn).resolve(Plans.remove),
        ),
      },
    }),
    resolve: () => true,
  },
});
