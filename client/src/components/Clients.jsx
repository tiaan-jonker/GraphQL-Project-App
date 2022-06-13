import { useQuery } from '@apollo/client'
import { GET_CLIENTS } from './graphql/clientDataQuery'
import { ClientRow } from './ClientRow'
import { Spinner } from './Spinner'

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)
  console.log(data)
  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  return (
    <div>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {!data.clients.length ? (
              <td>No client data</td>
            ) : (
              data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}
