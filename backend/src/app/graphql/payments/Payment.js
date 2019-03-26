const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
  } = require('graphql');
  
  const { Resolver } = require('../helpers');
  const { categoryMapper, teamMapper, transactionMapper } = require('../helpers/mappers');
  
  const createPaymentType = ({
      Transaction,
      Transactions,
      Categories,
      Category,
      Teams,
      Team,
  }) => new GraphQLObjectType({
    name: 'Payment',
    description: 'Payment schema',
    fields: {
        id: {
            type: GraphQLID,
            description: 'Payment id',
        },
        category: {
            type: Category,
            description: `Payment's category`,
            resolve: Resolver().mapper(categoryMapper).resolve(Categories.findOne),
        },
        amount: {
            type: GraphQLInt,
            description: 'Payment amount',
        },
        transaction: {
            type: Transaction,
            description: `Payment's transaction`,
            resolve: Resolver().mapper(transactionMapper).resolve(Transactions.findOne),
        },
        team: {
            type: Team,
            description: `Payment's team`,
            resolve: Resolver().mapper(teamMapper).resolve(Teams.findOne),
        },
    },
});
  
  module.exports = container => createPaymentType(container);
  