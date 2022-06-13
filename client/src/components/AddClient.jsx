import { useState } from 'react'
// import { FaUser } from 'react-icons'
import { useMutation } from '@apollo/client'
import { GET_CLIENTS } from './graphql/clientDataQuery'
import { ADD_CLIENT } from './graphql/clientMutations'
import { useNavigate } from 'react-router-dom'

export const AddClient = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS })

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      })
    },
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (name === '' || email === '' || phone === '') {
      alert('Please fill in all fields.')
    }

    addClient(name, email, phone)

    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='name'
          className='form-control'
          id='name'
          placeholder='Enter client name'
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-control'
          id='email'
          placeholder='Enter client email'
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='phone'>Phone</label>
        <input
          type='phone'
          className='form-control'
          id='phone'
          placeholder='Enter client phone number'
          value={phone}
          onChange={(evt) => setPhone(evt.target.value)}
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  )
}
