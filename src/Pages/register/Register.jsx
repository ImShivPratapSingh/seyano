import React, { useState } from "react";
import imgup from "../../Images/imgup.png";
import "./register.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "usersChat", res.user.uid),{});

            navigate("/");
          });
        }
      );
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
          <form className="loginBox" onSubmit={HandleSubmit}>
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
              <span style={{ color: "gray", cursor:"pointer" }}>Add an avatar</span>
            </label>
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            {err && <span style={{color:"red"}}>Something went wrong</span>}
            <Link to="/login" style={{marginLeft:"150px"}}>
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
