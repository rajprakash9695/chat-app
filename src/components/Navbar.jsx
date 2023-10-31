import React from "react";
import "../Styles/Home.css";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Raj Chat</span>
      <div className="user">
        <img
          src="https://imgv3.fotor.com/images/gallery/american-anime-stule-naked-man-avatar.jpg"
          alt=""
        />
        <span>Ram</span>
        <button>Logut</button>
      </div>
    </div>
  );
}

export default Navbar;
