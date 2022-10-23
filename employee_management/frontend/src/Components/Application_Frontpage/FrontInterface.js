import React from 'react'
import Home from './Home';
import About from '../About';
import Login from '../Login';
import Navigation from '../Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function FrontInterface() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  )
}