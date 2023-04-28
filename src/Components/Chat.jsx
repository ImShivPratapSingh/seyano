import React, { useContext } from 'react'
import call from '../Images/call.png'
import more from "../Images/more.png";
import add from "../Images/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from '../Context/ChatContext';

export const Chat = () => {
    const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
