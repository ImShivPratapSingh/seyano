import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="msgInfo msgInfoOwn">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="msgContent msgContentOwn">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>hello</p>
      </div>
    </div>
  );
}
export default Message;