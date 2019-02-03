const {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');
const Category = require('./Category');
const { Resolver } = require('../helpers');


module.exports = ({ find, findOne }, { loggedIn }) => ({
  categories: {
    type: GraphQLList(Category),
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(find.execute),
  },
  category: {
    type: Category,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLInt),
        description: 'Category id',
      },
    },
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(findOne.execute),
  },
});
