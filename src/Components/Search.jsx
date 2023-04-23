import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" className="searchInput" placeholder="Find a User" />
      </div>
      <div className="userChat"></div>
      <img
        className="userChatImg"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="userChatInfo">
        <span>Jane</span>
      </div>
    </div>
  );
};

export default Search;
