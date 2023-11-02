import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Chats() {
  const [chats, setChats] = useState({});

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      // Add null check for currentUser and currentUser.uid
      const getChats = () => {
        const unsub = onSnapshot(
          doc(db, "userChats", currentUser.uid),
          (doc) => {
            setChats(doc.data() || {}); // Use an empty object as a fallback
          }
        );

        return () => {
          unsub();
        };
      };

      getChats();
    }
  }, [currentUser]);

  return (
    <div className="chats">
      {Object.entries(chats).map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL || ""} alt="" />{" "}
          {/* Add a null check for photoURL */}
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName || "Unknown User"}</span>{" "}
            {/* Add a null check and a fallback for displayName */}
            <p>{chat[1].userInfo.lastMessage?.text || ""}</p>{" "}
            {/* Add a null check for lastMessage and a fallback for text */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chats;
