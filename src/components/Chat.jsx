import React from "react";
import "../Styles/Home.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Tahhh</span>
        <div className="chatIcons">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/003/586/437/small/video-camera-icon-record-icon-illustration-free-vector.jpg"
            alt="cam"
            height="30px"
          />
          <img
            src="https://static.thenounproject.com/png/4805070-200.png"
            alt="add"
            height="30px"
          />
          <img
            src="https://cdn.icon-icons.com/icons2/1509/PNG/512/viewmore_104374.png"
            alt="more"
            height="30px"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
