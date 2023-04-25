import { signOut } from "firebase/auth";
import { auth } from "../firebase"
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logoleft">Seyano</span>
      <div className="user">
        <img
          className="profileimg"
          src={currentUser.photoURL}
          alt=""
        />
        <span>{currentUser.displayName}</span>
        <button className="logout" onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
