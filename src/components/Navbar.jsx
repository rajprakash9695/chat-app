import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Raj Chat</span>
      <div className="user">
        {currentUser ? ( // Check if currentUser exists
          <>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut(auth)}>Logout</button>
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
