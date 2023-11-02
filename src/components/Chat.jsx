import React from "react";
import Input from "./Input";

import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Tahhh</span>
        <div className="chatIcons">
          <img src={Cam} alt="cam" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>{" "}
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
