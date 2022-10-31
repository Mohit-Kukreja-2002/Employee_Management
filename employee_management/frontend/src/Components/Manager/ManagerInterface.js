import React from 'react'
import Home from './Home';
import About from '../About';
import Login from '../Login/Login';
import Navigation from '../Navbar';
import Manage from './Manage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileState from '../ContextAPI/ProfileState';
import AddEmployee from './AddEmployee';
// import Alert from '../Alert';

export default function ManagerInterface() {
  const manager = true;
  return (
    <ProfileState>
      <Router>
        <div className="App">
          <Navigation manage={manager} />
          {/* <Alert/> */}
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/manage' element={<Manage />} />
            <Route exact path='/addEmployee' element={<AddEmployee />} />
          </Routes>
        </div>
      </Router>

    </ProfileState>
  )
}