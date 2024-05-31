// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXspDe82iQuqg-VQNtFywjDmsACre73_k",
  authDomain: "netflixgpt-3880c.firebaseapp.com",
  projectId: "netflixgpt-3880c",
  storageBucket: "netflixgpt-3880c.appspot.com",
  messagingSenderId: "984533002997",
  appId: "1:984533002997:web:f34a3ada16aca291ef73bc",
  measurementId: "G-GSDCFR2593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
