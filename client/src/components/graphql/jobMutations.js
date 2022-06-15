import { gql } from '@apollo/client'

const ADD_JOB = gql`
  mutation addJob(
    $name: String!
    $description: String!
    $status: JobStatus!
    $clientId: ID!
  ) {
    addJob(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`

const DELETE_JOB = gql`
  mutation DeleteJob($id: ID!) {
    deleteJob(id: $id) {
      id
    }
  }
`

export { ADD_JOB, DELETE_JOB }
