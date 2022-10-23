import React from 'react'
import Home from '../Manager/Home';
import About from '../Application_Frontpage/About';
import Login from '../Application_Frontpage/Login';
// import Navigation from '../Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Alert from '../Alert';

export default function Front() {
  return (
    <Router>
      <div className="App">
        {/* <Navigation/> */}
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