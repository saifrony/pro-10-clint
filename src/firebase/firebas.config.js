// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLY2SeJYz9SHcTwdgDp2M6Bo_kCtn01c8",
  authDomain: "clint-course.firebaseapp.com",
  projectId: "clint-course",
  storageBucket: "clint-course.appspot.com",
  messagingSenderId: "907798132823",
  appId: "1:907798132823:web:c31af94e9c43d436c20b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;