import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbklhvt1LfeEIvujhFliUAihYUrKgYT08",
  authDomain: "chats-c743f.firebaseapp.com",
  projectId: "chats-c743f",
  storageBucket: "chats-c743f.appspot.com",
  messagingSenderId: "5336673079",
  appId: "1:5336673079:web:1d370000609c9ffd09c8b2",
  measurementId: "G-NDHVFD0EVX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore();
