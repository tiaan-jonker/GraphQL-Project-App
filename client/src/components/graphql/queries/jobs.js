import { gql } from '@apollo/client'

const GET_JOBS = gql`
  query getJobs {
    jobs {
      id
      name
      status
    }
  }
`

const GET_JOB = gql`
  query getJob($id: ID!) {
    job(id: $id) {
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

export { GET_JOBS, GET_JOB }
