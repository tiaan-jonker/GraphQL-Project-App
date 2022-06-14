import { Spinner } from './Spinner'
import { JobCard } from './JobCard'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from './graphql/queries/jobs'

export const Jobs = () => {
  const { loading, error, data } = useQuery(GET_JOBS)

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  return (
    <>
      {data.jobs.length > 0 ? (
        <div className='row mt-4'>
          {data.jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p>No jobs</p>
      )}

      {!loading && !error}
    </>
  )
}
