import React from 'react'
import userimage from './images/user.png'
import './css/EmployeeCards.css'
import { Link } from 'react-router-dom';

const EmployeeCards = (props) => {
  const { profile } = props;
  return (
    <>
      <div className='my-3'>
        <div className="card">
          <div className='mt-3 mb-0'>
            <img className="card-img-top" style={{ width: '60%', borderRadius: '50%', textAlign:'center' }} src={userimage} alt="Card img" />
          </div>
          <div className="card-body">
            <p className="card-text" style={{ fontFamily: 'Fuzzy Bubbles , cursive', fontWeight: 'bolder', marginBottom: '8px', fontSize: '1.5rem' }}>{profile.employee_name}</p>
            <div className="card-footer">
              <p className="card-text text-muted" style={{ fontFamily: 'Fuzzy Bubbles , cursive', fontWeight: 'bolder' }}>{profile.position}</p>
            </div>
            <Link to="/employeeDetails" onClick={localStorage.setItem('e-id',props.id)}><button className="btn btn-sm btn-dark my-2 mb-0" onClick={localStorage.setItem('e-id',props.id)}>Details</button></Link>
          </div>
        </div>
      </div>

</>
  )
}

export default EmployeeCards