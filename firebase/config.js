// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiEqXW9ra7qcWgadT8Oc-c-biKa7Z8lSM",
  authDomain: "test-bf3ed.firebaseapp.com",
  projectId: "test-bf3ed",
  storageBucket: "test-bf3ed.firebasestorage.app",
  messagingSenderId: "24586674402",
  appId: "1:24586674402:web:b7a30e8c06f7b3a4847ebb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ★ Firebase Auth をここで初期化
export const auth = getAuth(app);
