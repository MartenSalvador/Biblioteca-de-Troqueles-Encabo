// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm0vZP8MpkHj_PNcZw_nKV57-Kl1KFm7g",
  authDomain: "biblioteca-de-troqueles.firebaseapp.com",
  projectId: "biblioteca-de-troqueles",
  storageBucket: "biblioteca-de-troqueles.firebasestorage.app",
  messagingSenderId: "750794325795",
  appId: "1:750794325795:web:44a74b3bd55d58fa49d696",
  measurementId: "G-0MYFE4GXNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };