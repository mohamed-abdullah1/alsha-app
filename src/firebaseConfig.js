// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBkO6BJu4R0etDE11t4KhFDfBzUUYXrj0",
  authDomain: "book-app-test-692f0.firebaseapp.com",
  databaseURL: "https://book-app-test-692f0-default-rtdb.firebaseio.com",
  projectId: "book-app-test-692f0",
  storageBucket: "book-app-test-692f0.appspot.com",
  messagingSenderId: "313115285813",
  appId: "1:313115285813:web:b363af961852db1183947c",
  measurementId: "G-PTX9P9G39S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
