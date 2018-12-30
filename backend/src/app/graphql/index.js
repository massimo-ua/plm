const { Router } = require('express');
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const users = [
  {
    id: 1,
    name: 'Massimo',
  },
  {
    id: 2,
    name: 'Test',
  },
];

const getUser = ({ id }) => {
  const [selectedUser] = users.filter(user => user.id === id);
  return selectedUser;
};

const getUsers = () => users;

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User shchema',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'User id',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'User name',
    },
  },
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: userType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt),
          description: 'User id',
        },
      },
      resolve: (root, args) => getUser(args),
    },
    users: {
      type: GraphQLList(userType),
      resolve: () => getUsers(),
    },
  }),
});

const schema = new GraphQLSchema({
  query,
  types: [userType],
});

module.exports = ({ core }) => {
  const router = Router();
  router.use('/', graphqlHTTP({
    schema,
    graphiql: true,
  }));

  core.addModuleHttpAPI({
    version: 'v1',
    path: 'graphql',
    subRouter: router,
    name: 'GraphqlModule',
  });

  return {
    whoami: () => 'GraphqlModule',
  };
};
