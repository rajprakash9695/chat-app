import React, { useEffect, useState } from "react";
import Add from "../img/image_icon_153794.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log("log:res", res);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).than(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              password,
              photoURL: downloadURL,
            });
          });
        }
      );

      //Create a unique image name
      // const date = new Date().getTime();
      // const storageRef = ref(storage, `${displayName + date}`);

      // await uploadBytesResumable(storageRef, file).then(() => {
      //   getDownloadURL(storageRef).then(async (downloadURL) => {
      //     try {
      //       //Update profile
      //       await updateProfile(res.user, {
      //         displayName,
      //         photoURL: downloadURL,
      //       });
      //       //create user on firestore
      //       await setDoc(doc(db, "users", res.user.uid), {
      //         uid: res.user.uid,
      //         displayName,
      //         email,
      //         photoURL: downloadURL,
      //       });

      //       //create empty user chats on firestore
      //       await setDoc(doc(db, "userChats", res.user.uid), {});
      //       navigate("/");
      //     } catch (err) {
      //       console.log(err);
      //       setErr(true);
      //       setLoading(false);
      //     }
      //   });
      // });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Raj Chat</span>
        <span className="title">Register</span>
        <form className="form" onSubmit={handleSubmit}>
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

          <button disabled={loading} className="button">
            Sign Up
          </button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>SomeThing went wrong</span>}
        </form>
        <p className="p">
          You do have Account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
