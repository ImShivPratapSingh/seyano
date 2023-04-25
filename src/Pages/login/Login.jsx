import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")

    } catch (err) {
      setErr(true);
    }
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Seyano</h3>
          <span className="loginDesc">Chat all you want !</span>
        </div>
        <div className="loginRight">
          <form className="loginBoxL" onSubmit={HandleSubmit}>
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
              Sign in
            </button>
            <Link to="/register" style={{ marginLeft: "150px" }}>
              <button className="loginRegisterButton">Create an Account</button>
            </Link>
            {err && <span style={{ color: "red" }}>Something went wrong</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
