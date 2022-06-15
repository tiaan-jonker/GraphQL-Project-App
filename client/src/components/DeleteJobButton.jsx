import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { GET_JOBS } from './graphql/queries/jobs'
import { DELETE_JOB } from './graphql/jobMutations'
import { useMutation } from '@apollo/client'

export const DeleteJobButton = ({ jobId }) => {
  const navigate = useNavigate()

  const [handleDelete] = useMutation(DELETE_JOB, {
    variables: { id: jobId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_JOBS }],
  })

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={handleDelete}>
        <FaTrash className='icon' /> Delete Job
      </button>
    </div>
  )
}
