import { useQuery } from '@apollo/client'
import { GET_CLIENTS } from './graphql/queries/clients'
import { Link } from 'react-router-dom'
import { ClientRow } from './ClientRow'
import { Spinner } from './Spinner'

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <button type='button' className='btn btn-primary mr-3'>
        <Link to='/newclient'>Add client</Link>
      </button>
      <button type='button' className='btn btn-primary'>
        <Link to='/newjob'>Add job</Link>
      </button>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
