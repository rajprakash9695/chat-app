import React, { useState } from "react";
import Add from "../img/image_icon_153794.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const storeAuthTokenInLocalStorage = (token) => {
      localStorage.setItem("authToken", token);
    };

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const token = await user.getIdToken();
      storeAuthTokenInLocalStorage(token);
      navigate("/");
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
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
          You don't have Account ? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
