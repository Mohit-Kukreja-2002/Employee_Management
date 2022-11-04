import React from 'react'
import About from './About';
import Navigation from './Navbar';
import Manage from './Manage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './AddEmployeeForm';
import ManagerHome from './ManagerHome';

export default function ManagerInterface() {
  const manager = true;
  return (
        <Router>
          <div className="App">
            <Navigation manage={manager} />
            {/* <Alert/> */}
            <Routes>
              <Route exact path='/' element={<ManagerHome />} />
              <Route exact path='/managerhome' element={<ManagerHome />} />

              <Route exact path='/about' element={<About />} />
              <Route exact path='/addEmployee' element={<AddEmployee />} />
              <Route exact path='/manage' element={<Manage />} />
            </Routes>
          </div>
        </Router>
  )
}
