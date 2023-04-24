import React, { useEffect, useState } from "react";
import imgup from "../../Images/imgup.png";
import './register.css'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Register = () => {

  const handleSubmit = async (e) => {
    const [err,setErr] = useState(false)
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch(err){
      setErr(true)
    }

  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Seyano</h3>
          <span className="loginDesc">Chat all you want !</span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input type="text" placeholder="Username" className="loginInput" />
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
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={imgup} alt="" />
              <span>Add an avatar</span>
            </label>
            <button
              className="loginButton"
              type="submit"
              onSubmit={handleSubmit}
            >
              Sign Up
            </button>
            {err && <span>Something went wrong</span>}
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
