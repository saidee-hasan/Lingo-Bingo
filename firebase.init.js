// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD15-bx81D_582sduHM793Zh-t7btI0JVk",
  authDomain: "lingobingo-bd9e3.firebaseapp.com",
  projectId: "lingobingo-bd9e3",
  storageBucket: "lingobingo-bd9e3.firebasestorage.app",
  messagingSenderId: "121528282949",
  appId: "1:121528282949:web:b95216b459b50cbe13182c",
  measurementId: "G-2L3C2M1MYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export app = getAuth(app)