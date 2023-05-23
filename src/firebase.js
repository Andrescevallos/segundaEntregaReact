// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4vuInHUBJQ6YBuoyyuwgHfdkcl8jXBS4",
  authDomain: "react-9d2b5.firebaseapp.com",
  projectId: "react-9d2b5",
  storageBucket: "react-9d2b5.appspot.com",
  messagingSenderId: "35980407082",
  appId: "1:35980407082:web:6f086791e8acfd003cae53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)