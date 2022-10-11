import React from 'react'
import Home from './Home/Home';
import About from './About/About';
import Login from './Login/Login';
import Navigation from './NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Front() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  )
}
