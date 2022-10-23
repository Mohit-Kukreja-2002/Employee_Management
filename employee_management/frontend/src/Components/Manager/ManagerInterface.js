import React from 'react'
import Home from './Home';
import About from '../About';
import Login from '../Login';
import Navigation from '../Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Alert from '../Alert';

export default function ManagerInterface() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        {/* <Alert/> */}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  )
}