import React from 'react'
import Apply from './Apply/Apply';
import About from './About/About';
import Pastleave from './Pastleave/Pastleave';
import Navigation from './NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Front() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route path='/apply' element={<Apply/>} />
          <Route path='/pastleaves' element={<Pastleave/>} />
        </Routes>
      </div>
    </Router>
  )
}
