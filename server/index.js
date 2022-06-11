const express = require('express')
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

const server = express()

connectDB()

server.use(cors())

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

server.listen(port, console.log(`Listening on port: ${port}`))
