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

export { GET_JOBS }
