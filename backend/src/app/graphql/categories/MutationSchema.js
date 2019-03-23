const {
  GraphQLObjectType,
} = require('graphql');
const { Create, Update, Delete } = require('./mutations');
const { Resolver } = require('../helpers');

module.exports = ({
  Category,
  Categories,
  auth,
}) => ({
  categories: {
    type: new GraphQLObjectType({
      name: 'CategoryMutation',
      description: 'Category mutation schema',
      fields: {
        ...Create({
          Category,
          resolver: Resolver().middleware(auth.loggedIn).resolve(Categories.create),
        }),
        ...Update({
          Category,
          resolver: Resolver().middleware(auth.loggedIn).resolve(Categories.update),
        }),
        ...Delete({
          Category,
          resolver: Resolver().middleware(auth.loggedIn).resolve(Categories.remove),
        }),
      },
    }),
    resolve: () => true,
  },
});
