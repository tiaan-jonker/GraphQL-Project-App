import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items mt-5'>
      <FaExclamationTriangle className='text-danger' size='5em' />
      <h1>404</h1>
      <p className='lead'>This page does not exist.</p>
      <Link to='/' className='btn btn-primary'>
        Go back
      </Link>
    </div>
  )
}
