import React, { useContext, useState } from "react";
import img from "../Images/img.png";
import file from "../Images/file.png";
import send from "../Images/send.png";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const HandleSend = async () => {

    if(img){
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img:downloadURL
              }),
            });
          });
        }
      );

    } else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages: arrayUnion({
          id:uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

  };

  return (
    <div className="outerInput">
      <div className="input">
        <input
          type="text"
          placeholder="message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="send">
          <img src={file} alt="" />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src={img} alt="" />
          </label>
          <img src={send} alt="" onClick={HandleSend} />
        </div>
      </div>
    </div>
  );
};
export default Input;
