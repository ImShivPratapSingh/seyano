import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhCn6I7SDK62ZZr-vvamuWHzNMWiZGFUo",
  authDomain: "seyano-f30d2.firebaseapp.com",
  projectId: "seyano-f30d2",
  storageBucket: "seyano-f30d2.appspot.com",
  messagingSenderId: "821499159716",
  appId: "1:821499159716:web:11f30d845ec1ed58b2f231",
  measurementId: "G-9YG32Y5944",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
