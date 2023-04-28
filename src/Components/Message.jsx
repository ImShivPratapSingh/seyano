import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext)
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(()=> {
    ref.current?.scrollIntoView({behaviour:"smooth"})
  },[message])

  return (
    <div ref = {ref} className={`message ${message.senderId===currentUser.uid && "owner"}`}>
      <div className={`msgInfo ${message.senderId===currentUser.uid && "msgInfoOwn"}`}>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={`msgContent ${message.senderId===currentUser.uid && "msgContentOwn"}`}>
        {message.img && <img
          src={message.img}
          alt=""
        />}
        <p>{message.text}</p>
      </div>
    </div>
  );
}
export default Message;