import React from 'react'
import './register.css'
const Register = () => {
  return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Seyano</h3>
            <span className="loginDesc">Chat all you want !</span>
          </div>
          <div className="loginRight">
            <form className="loginBox">
              <input type='text'
                placeholder="Username"
                className="loginInput"
              />
              <input
                placeholder="Email"
                required
                className="loginInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                className="loginInput"
                type="password"
                minLength="6"
              />
              <button className="loginButton" type="submit">
                Sign Up
              </button>
              <button className="loginRegisterButton">Log into Account</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Register;