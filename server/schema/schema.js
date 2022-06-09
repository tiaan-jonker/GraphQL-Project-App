const { jobs, clients } = require('../sampleData')

const Client = require('../models/Client')
const Job = require('../models/Job')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql')

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
})

const JobType = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    remuneration: { type: GraphQLString },
    urgent: { type: GraphQLBoolean },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return clients.findById(parent.clientId)
      },
    },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find()
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id)
      },
    },
    jobs: {
      type: new GraphQLList(JobType),
      resolve(parent, args) {
        return Job.find()
      },
    },
    job: {
      type: JobType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Job.findById(args.id)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
