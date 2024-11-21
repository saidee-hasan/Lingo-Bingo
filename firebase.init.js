// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnB41FUjvAelr2J_OyqOJTXhGFJEegeeQ",
  authDomain: "problem-8f5f0.firebaseapp.com",
  projectId: "problem-8f5f0",
  storageBucket: "problem-8f5f0.firebasestorage.app",
  messagingSenderId: "937104619175",
  appId: "1:937104619175:web:1a9cdf238a43ebdc948d82",
  measurementId: "G-8DSJ56WS75"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)