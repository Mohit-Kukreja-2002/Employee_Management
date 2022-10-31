import React, { useContext, useEffect } from 'react'
import userimage from '../images/user.png'
import EmployeeCards from './EmployeeCards';
import profileContext from '../ContextAPI/profileContext';
import '../css/manager.css'

export default function Manager_Home() {
  const context = useContext(profileContext);
  const { profiles, getProfiles } = context;

  useEffect(() => {
    getProfiles()
  }, // eslint-disable-next-line
    [])
  return (
    <>
      <div className='container center-block text-center' style={{ marginTop: '6rem' }}>
        <div className='d-inline-block mx-auto my-3' >
          <img className='.img-fluid .img-thumbnail' src={userimage} style={{ height: '17rem', borderRadius: '50%' }} alt="" />
        </div>
        <div className='d-inline-block text-center align-middle'>
          <h1 className='mx-5'>Hey Usename</h1>
          <h3 className='mx-5 text-muted my-2' >Role at Company Name</h3>
          <h4 className='mx-5 text-muted my-2'>position</h4>
        </div>
      </div>

      <hr className='hori' />

      <h2>You are managing </h2>


      <div className="container my-3 text-center">
        <div className='card-group col justify-content-center'>

          {profiles.map((profile) => {
            return <div key={profile._id} className="mx-3 card-width-14rem">
              <EmployeeCards profile={profile} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}
