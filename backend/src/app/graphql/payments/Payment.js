const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

const { Resolver } = require('../helpers');
const { categoryMapper, teamMapper } = require('../helpers/mappers');

const createPaymentType = ({
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
      description: 'Payment\'s category',
      resolve: Resolver().mapper(categoryMapper).resolve(Categories.findOne),
    },
    amount: {
      type: GraphQLInt,
      description: 'Payment amount',
    },
    team: {
      type: Team,
      description: 'Payment\'s team',
      resolve: Resolver().mapper(teamMapper).resolve(Teams.findOne),
    },
  },
});

module.exports = container => createPaymentType(container);
