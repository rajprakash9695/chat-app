import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
// import "../Styles/Home.css";

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
        <button onClick={() => signOut(auth)}>Logut</button>
      </div>
    </div>
  );
}

export default Navbar;
