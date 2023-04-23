import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logoleft">Seyano</span>
      <div className="user">
        <img
          className="profileimg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <span>Jenniffer</span>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
