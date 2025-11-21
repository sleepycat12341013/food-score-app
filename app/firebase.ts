// firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyBiEqXW9ra7qcWgadT8Oc-c-biKa7Z8lSM",
  authDomain: "test-bf3ed.firebaseapp.com",
  projectId: "test-bf3ed",
  storageBucket: "test-bf3ed.firebasestorage.app",
  messagingSenderId: "24586674402",
  appId: "1:24586674402:web:b7a30e8c06f7b3a4847ebb",
};

// Firebase 初期化
const app = initializeApp(firebaseConfig);

// 🔥 Firestore を追加！（これが無かった）
export const db = getFirestore(app);

// 認証も使うならそのまま
export const auth = getAuth(app);
