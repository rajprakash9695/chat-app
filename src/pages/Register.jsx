import React from "react";
import Add from "../img/image_icon_153794.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Raj Chat</span>
        <span className="title">Register</span>
        <form className="form">
          <input className="input" type="text" placeholder="Enter name" />
          <input className="input" type="email" placeholder="Enter email" />
          <input
            className="input"
            type="password"
            placeholder="Enter password"
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="label" htmlFor="file">
            <img src={Add} alt="" height="30px" />
            <span style={{ paddingLeft: "5px" }}>Add an avatar</span>
          </label>

          <button className="button">Sign Up</button>
        </form>
        <p className="p">You do have Account ? Login</p>
      </div>
    </div>
  );
}

export default Register;
