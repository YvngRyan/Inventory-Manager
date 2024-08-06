// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhdkJaZPucnFgXsbCBP8vji2RgGlKZGms",
  authDomain: "inventory-management-1e4fb.firebaseapp.com",
  projectId: "inventory-management-1e4fb",
  storageBucket: "inventory-management-1e4fb.appspot.com",
  messagingSenderId: "615856920090",
  appId: "1:615856920090:web:a5529448eef16b2656e3a3",
  measurementId: "G-LMRNDHQ1L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}
