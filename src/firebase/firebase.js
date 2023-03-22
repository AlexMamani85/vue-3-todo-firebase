// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firestore/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3cbGhStTuxr2jQ-qL4wnNfbt5ncxOps",
  authDomain: "vue-firebase-357e7.firebaseapp.com",
  projectId: "vue-firebase-357e7",
  storageBucket: "vue-firebase-357e7.appspot.com",
  messagingSenderId: "550325562310",
  appId: "1:550325562310:web:7775fa6d9f5fcc1042a0c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)