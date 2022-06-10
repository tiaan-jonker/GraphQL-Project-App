const Client = require('../models/Client')
const Job = require('../models/Job')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql')
const { assertValidExecutionArguments } = require('graphql/execution/execute')

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

// Fetching data
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

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Clients
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
          address: args.address,
        })

        return client.save()
      },
    },
    updateClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndUpdate(args.id)
      },
    },
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id)
      },
    },

    // Jobs
    addJob: {
      type: JobType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'JobStatus',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'completed' },
            },
          }),
          defaultValue: 'Not Started',
        },
        remuneration: {
          type: new GraphQLEnumType({
            name: 'RemunerationType',
            values: {
              paid: { value: 'Paid' },
              free: { value: 'Pro-bono' },
            },
          }),
          defaultValue: 'Paid',
        },
        urgent: {
          type: new GraphQLBoolean({
            name: 'UrgentType',
            values: {
              true: { value: true },
              false: { value: false },
            },
          }),
          defaultValue: false,
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const job = new Job({
          name: args.name,
          description: args.description,
          status: args.status,
          remuneration: args.remuneration,
          urgent: args.urgent,
          clientId: args.clientId
        })
      }
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
})
