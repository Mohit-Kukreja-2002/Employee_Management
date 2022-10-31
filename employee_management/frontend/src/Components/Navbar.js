import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Login from './Login/Login';
import React from 'react';

export default function Navigation(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">Company Name</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className={`nav-item ${props.manager?"":"d-none"}`}>
                <Link className="nav-link" to="/manage">Manage</Link>
              </li>
              <li className={`nav-item ${props.manage?"":"d-none"}`}>
                <Link className="nav-link" to="/addEmployee"></Link>
              </li>
            </ul>
            <button type="button" className="btn btn-primary" onClick={() => setModalShow(true)}>
              Login
            </button>
              <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
          </div>
        </div>
      </nav>
    </>
  );
}