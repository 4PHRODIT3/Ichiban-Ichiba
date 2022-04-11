// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrZXntRBPoZPT4K-GzMlWuBwvwG357Uxs",
  authDomain: "ichiban-ichiba.firebaseapp.com",
  projectId: "ichiban-ichiba",
  storageBucket: "ichiban-ichiba.appspot.com",
  messagingSenderId: "616414297706",
  appId: "1:616414297706:web:22d7ad3dd1e73769239413",
  measurementId: "G-GWERC8YXZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize db for Database Operations
export const db = getFirestore(app);
// const analytics = getAnalytics(app);