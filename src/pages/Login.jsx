import React, { useState } from "react";
// import Add from "../img/image_icon_153794.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("login");
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("ok1");
      navigate("/");
      console.log("ok2");
    } catch (err) {
      setErr(true);
    }
    //
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Raj Chat</span>
        <span className="title">Login</span>
        <form className="form" onSubmit={handleSubmit}>
          <input className="input" type="email" placeholder="Enter email" />
          <input
            className="input"
            type="password"
            placeholder="Enter password"
          />

          <button className="button">Sign in</button>
          {err && <span>SomeThing went wrong</span>}
        </form>
        <p className="p">
          You don't have Account ? <Link to="/register"> Register </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
