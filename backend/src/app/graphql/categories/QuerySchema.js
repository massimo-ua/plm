const {
  GraphQLList,
} = require('graphql');
const Category = require('./Category');
const { Resolver } = require('../helpers');


module.exports = ({ find }, { loggedIn }) => ({
  categories: {
    type: GraphQLList(Category),
    resolve: Resolver()
      .middleware(loggedIn)
      .resolve(find.execute),
  },
});
