// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import env from "react-dotenv";

const API_KEY = env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "travel-nerd.firebaseapp.com",
  projectId: "travel-nerd",
  storageBucket: "travel-nerd.appspot.com",
  messagingSenderId: "198547727690",
  appId: "1:198547727690:web:8a4a094839f9013eb5cdb3",
  measurementId: "G-1SBK5EPQNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
