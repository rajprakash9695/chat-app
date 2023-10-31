import React from "react";
import Add from "../img/image_icon_153794.png";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Raj Chat</span>
        <span className="title">Login</span>
        <form className="form">
          <input className="input" type="email" placeholder="Enter email" />
          <input
            className="input"
            type="password"
            placeholder="Enter password"
          />

          <button className="button">Sign in</button>
        </form>
        <p className="p">You don't have Account ? Register</p>
      </div>
    </div>
  );
}

export default Login;
