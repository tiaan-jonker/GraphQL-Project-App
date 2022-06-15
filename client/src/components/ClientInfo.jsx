import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa'

export const ClientInfo = ({ client }) => {
  const { name, email, phone } = client

  return (
    <div>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' /> {name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {email}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {phone}
        </li>
      </ul>
    </div>
  )
}
