import React from 'react'
import userimage from '../images/user.png'
import './manager.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import EmployeeCards from './EmployeeCards';
import './manager.css'
// import Navigation from '../Navbar/NavBar'
// import Home from './Home';
// import About from '../Application_Frontpage/About';
// import Login from '../Application_Frontpage/Login';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Manager_Home() {
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

      <hr className='hori'/>

      <h2>You are managing </h2>

      <div className="container my-3 text-center">
        <div className='card-group col justify-content-center'>
          <div className="mx-3 card-width-14rem">
          <EmployeeCards />
          </div>
          <div className="mx-3 card-width-14rem" >
          <EmployeeCards />
          </div>
          <div className="mx-3 card-width-14rem" >
          <EmployeeCards />
          </div>
          <div className="mx-3 card-width-14rem" >
          <EmployeeCards />
          </div><div className="mx-3 card-width-14rem" >
          <EmployeeCards />
          </div>
          <div className="mx-3 card-width-14rem" >
          <EmployeeCards />
          </div><div className="mx-3 card-width-14rem" >
          <EmployeeCards />
          </div><div className="mx-3 card-width-14rem" >
          <EmployeeCards />
          </div>
        </div>
          {//!this.state.loading && 
            // articles.map((element) => {
              // return 
              // <div className="col-md-4" key={element.url}>
              //   <EmployeeCards title={element.title} description={element.description} src={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.source.name} />                </div>
              // })
              // {/* } */
            }
      </div>

      {/* <div className='d-flex text-center align-middle'>
        
      </div> */}
    </>
  )
}
