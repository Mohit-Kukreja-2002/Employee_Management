import React from 'react'
import userimage from '../images/user.png'

const EmployeeCards = (props) => {
  return (
    <>
      <div className='my-3'>
        <div className="card" >
          <div className='mt-3 mb-0'>
            <img className="card-img-top" style={{ width: '60%', borderRadius: '50%', textAlign:'center' }} src={userimage} alt="Card img" />
          </div>
          <div className="card-body">
            <p className="card-text" style={{ fontFamily: 'Fuzzy Bubbles , cursive', fontWeight: 'bolder', marginBottom: '8px', fontSize: '1.5rem' }}>Name</p>
            <div className="card-footer">
              <p className="card-text text-muted" style={{ fontFamily: 'Fuzzy Bubbles , cursive', fontWeight: 'bolder' }}>Role</p>
            </div>
            <a href="/" className="btn btn-sm btn-dark my-2 mb-0">Details</a>
          </div>
        </div>
      </div>

</>
  )
}

export default EmployeeCards