import './Login.css'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


export default function Login(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-vcenter"
      centered
    >
      <Modal.Body className="forms">
        <div className={isActive ? 'is-active form-wrapper' : 'form-wrapper'} onClick={handleClick}>
          <button type="button" className="switcher switcher-login">
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label for="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label for="login-password">Password</label>
                <input id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">Login</button>
          </form>
        </div>
        <div className={isActive ? 'form-wrapper' : 'is-active form-wrapper'} onClick={handleClick}>
          <button type="button" className="switcher switcher-signup">
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup">
            <fieldset>
              <legend>Please, enter your email, password and password confirmation for sign up.</legend>
              <div className="input-block">
                <label for="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label for="signup-password">Password</label>
                <input id="signup-password" type="password" required />
              </div>
              <div className="input-block">
                <label for="signup-password-confirm">Confirm password</label>
                <input id="signup-password-confirm" type="password" required />
              </div>
            </fieldset>
            <button type="submit" classNameName="btn-signup">Continue</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}