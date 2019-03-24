const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const { Resolver } = require('../helpers');

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
        list: {
          type: GraphQLList(Category),
          resolve: Resolver()
            .middleware(auth.loggedIn)
            .resolve(Categories.find),
        },
        show: {
          type: Category,
          args: {
            id: {
              type: GraphQLNonNull(GraphQLID),
              description: 'Category id',
            },
          },
          resolve: Resolver()
            .middleware(auth.loggedIn)
            .resolve(Categories.findOne),
        },
      },
    }),
    resolve: () => true,
  },
});
