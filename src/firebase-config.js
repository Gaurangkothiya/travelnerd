// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBBcNt5igHcMo6M5xnjOYQrdkN9dlxUHA",
  authDomain: "travel-nerd.firebaseapp.com",
  projectId: "travel-nerd",
  storageBucket: "travel-nerd.appspot.com",
  messagingSenderId: "198547727690",
  appId: "1:198547727690:web:8a4a094839f9013eb5cdb3",
  measurementId: "G-1SBK5EPQNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);