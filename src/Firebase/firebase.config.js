// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEjPOqMbvHAivTIMGiPPsVTuubqfC8kUI",
  authDomain: "technology-and-electroni-6f446.firebaseapp.com",
  projectId: "technology-and-electroni-6f446",
  storageBucket: "technology-and-electroni-6f446.appspot.com",
  messagingSenderId: "298092233329",
  appId: "1:298092233329:web:38224656beeafabc3ed1d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 
