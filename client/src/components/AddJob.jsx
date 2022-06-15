import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_CLIENTS } from './graphql/queries/clients'
import { GET_JOBS } from './graphql/queries/jobs'
import { ADD_JOB } from './graphql/jobMutations'
import { useNavigate } from 'react-router-dom'
import { Spinner } from './Spinner'

export const AddJob = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [clientId, setClientId] = useState('')
  const [status, setStatus] = useState('new')

  const [addJob] = useMutation(ADD_JOB, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addJob } }) {
      const { jobs } = cache.readQuery({ query: GET_JOBS })
      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: [...jobs, addJob] },
      })
    },
  })

  const { loading, error, data } = useQuery(GET_CLIENTS)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (name === '' || description === '' || status === '') {
      alert('Please fill in all fields.')
    }

    addJob(name, description, clientId, status)

    navigate('/')
  }

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong</p>

  return (
    <>
      {!loading && !error && (
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='name'
              className='form-control'
              id='name'
              placeholder='Enter job name'
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              type='description'
              className='form-control'
              id='description'
              placeholder='Enter job description'
              value={description}
              onChange={(evt) => setDescription(evt.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='status'>Status</label>
            <select
              id='status'
              className='form-select'
              value={status}
              onChange={(evt) => setStatus(evt.target.value)}
            >
              <option value='new'>Not started</option>
              <option value='progress'>In progress</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='' className='form-label'>
              Client
            </label>
            <select
              name=''
              id='clientId'
              className='form-select'
              value={clientId}
              onChange={(evt) => setClientId(evt.target.value)}
            >
              <option value=''>Select Client</option>
              {data.clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      )}
    </>
  )
}
