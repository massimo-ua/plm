const {
  GraphQLObjectType,
} = require('graphql');
const { Resolver, QueryListFactory, QueryShowFactory  } = require('../helpers');

module.exports = ({
  Category,
  Categories,
  auth,
}) => ({
  categories: {
    type: new GraphQLObjectType({
      name: 'CategoryQuery',
      description: 'Category query schema',
      fields: {
        ...QueryListFactory({
          Type: Category,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Categories.find),
        }),
        ...QueryShowFactory({
          Type: Category,
          resolve: Resolver().middleware(auth.loggedIn).resolve(Categories.findOne),
        }),
      },
    }),
    resolve: () => true,
  },
});
