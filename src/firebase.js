import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt3RKvjfmsrYS5p3ZufxuLtLb2-OHB1qU",
  authDomain: "chats-dbb7e.firebaseapp.com",
  projectId: "chats-dbb7e",
  storageBucket: "chats-dbb7e.appspot.com",
  messagingSenderId: "128736274214",
  appId: "1:128736274214:web:fc9392787724ebaae3c3e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
