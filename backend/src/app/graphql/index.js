const { Router } = require('express');
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  buildSchema,
} = require('graphql');

const schema = buildSchema(`
  type Query {
    user(id: Int!): User
    users: [User]
  },
  type User {
    id: Int
    name: String
  }
`);

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

const root = {
  user: getUser,
  users: getUsers,
};

module.exports = ({ core }) => {
  const router = Router();
  router.use('/', graphqlHTTP({
    schema,
    rootValue: root,
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
