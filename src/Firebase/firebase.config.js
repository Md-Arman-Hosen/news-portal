// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9bTyRlPFKemyZEYz2wxCaczKSerjobGc",
  authDomain: "news-portal-e70cc.firebaseapp.com",
  projectId: "news-portal-e70cc",
  storageBucket: "news-portal-e70cc.firebasestorage.app",
  messagingSenderId: "364062375310",
  appId: "1:364062375310:web:f8a5aa14050af36d67b8df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;