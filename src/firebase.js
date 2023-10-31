import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwKknavpCpZxBRzE-jYtpAQOZNrGAEhwA",
  authDomain: "chat-65b19.firebaseapp.com",
  projectId: "chat-65b19",
  storageBucket: "chat-65b19.appspot.com",
  messagingSenderId: "396839940066",
  appId: "1:396839940066:web:49594bb33af6b8427113bb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
