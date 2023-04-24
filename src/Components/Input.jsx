import React from 'react'
import img from "../Images/img.png";
import file from "../Images/file.png";
import send from "../Images/send.png";


const Input = () => {
  return (
    <div className="outerInput">
      <div className="input">
      <input type="text" placeholder='message...'/>
      <div className="send">
        <img src={file} alt=""/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <img src={img} alt=""/>
        </label>
        <img src={send} alt=""/>
      </div>
      </div>
    </div>
  );
}
export default Input