import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc, serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const HandleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const HandleKey = (e) => {
    e.code === "Enter" && HandleSearch();
  };

  const HandleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create new one.
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try{
      const res = await getDoc(doc(db, "chats", combinedId));

      if(!res.exists()){
        //create chat
        
        await setDoc(doc(db,"chats", combinedId),{
          messages:[] 
        });
 
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        });

        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
            displayName:currentUser.displayName,
            photoURL:currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
      }
    } catch(err){}

    setUser(null);
    setUsername("")

  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          className="searchInput"
          placeholder="Search User"
          onKeyDown={HandleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span style={{color:"red", marginLeft:"135px"}}>user not found</span>}
      {user && 
        <div className="userChat" onClick={HandleSelect}>
          <img className="userChatImg" src={user.photoURL} alt="" />
          <div className="userChatInfoS">
            <span>{user.displayName}</span>
          </div>
        </div>
      }
    </div>
  );
};

export default Search;
