import React from 'react'
import call from '../Images/call.png'
import more from "../Images/more.png";
import add from "../Images/add.png";
import Messages from "./Messages";
import Input from "./Input";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatImgs">
          <img src={call} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
}
