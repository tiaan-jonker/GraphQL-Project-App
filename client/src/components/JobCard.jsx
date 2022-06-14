import React from 'react'

export const JobCard = ({ job }) => {
  return (
    <div className='col-md-4'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='card-title'>{job.name}</div>
            <a className='btn btn-white' href={`/jobs/${job.id}`}>
              View
            </a>
          </div>
          <p className='small'>
            Status <strong>{job.status}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
