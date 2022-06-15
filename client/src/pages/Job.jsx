import { useQuery } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import { GET_JOB } from '../components/graphql/queries/jobs'
import { Spinner } from '../components/Spinner'
import { ClientInfo } from '../components/ClientInfo'
import { DeleteJobButton } from '../components/DeleteJobButton'

export const Job = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { id },
  })

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  const { name, description, status, client } = data.job

  return (
    <div>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>
          <h1>{name}</h1>
          <p>{description}</p>

          <h3 className='mt-3'>Project Status</h3>
          <p className='lead'>{status}</p>

          <ClientInfo client={client} />

          <DeleteJobButton jobId={data.job.id} />
        </div>
      )}
    </div>
  )
}
