const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const port = process.env.PORT || 8000

const server = express()

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

server.listen(port, console.log(`Listening on port: ${port}`))
