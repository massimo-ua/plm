const {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} = require ('graphql');

const {GraphQLDate} = require ('graphql-iso-date');

const {Resolver} = require ('../helpers');
const {teamMapper, selfMapper} = require ('../helpers/mappers');

const createPlanType = ({Teams, Team, Plans}) =>
  new GraphQLObjectType ({
    name: 'Plan',
    description: 'Plan schema',
    fields: {
      id: {
        type: GraphQLID,
        description: 'Plan id',
      },
      name: {
        type: GraphQLString,
        description: 'Plan name',
      },
      startDate: {
        type: GraphQLDate,
        description: 'Plan start date',
      },
      endDate: {
        type: GraphQLDate,
        description: 'Plan end date',
      },
      targetAmount: {
        type: GraphQLInt,
        description: 'Plan target amount',
      },
      dailyAmount: {
        type: GraphQLInt,
        description: 'Plan daily amount',
      },
      team: {
        type: Team,
        description: 'Team that Transaction belongs to',
        resolve: Resolver ().mapper (teamMapper).resolve (Teams.findOne),
      },
      expectedAmount: {
        type: GraphQLInt,
        description: 'Expected current plan amount',
        resolve: Resolver ().mapper (selfMapper).resolve (Plans.expectedAmount),
      },
    },
  });

module.exports = container => createPlanType (container);
