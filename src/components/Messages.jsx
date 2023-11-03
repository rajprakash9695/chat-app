import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data) {
      const unSub = onSnapshot(doc(db, "chats", data?.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => {
        unSub();
      };
    }
  }, [data]);

  console.log(data);

  return (
    <div className="messages">
      {messages.map((m) => (m ? <Message message={m} key={m.id} /> : ""))}
    </div>
  );
};

export default Messages;
