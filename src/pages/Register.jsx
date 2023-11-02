import React from "react";
import Add from "../img/image_icon_153794.png";

function Register() {
  const handleSubmit = (e) => {
    console.log("Register");
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    console.log(file);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Raj Chat</span>
        <span className="title">Register</span>
        <form className="form" id="form" onSubmit={handleSubmit}>
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
          {/* {loading && "Uploading and compressing the image please wait..."} */}
          <span>SomeThing went wrong</span>
        </form>
        <p className="p">You do have Account Login</p>
      </div>
    </div>
  );
}

export default Register;
