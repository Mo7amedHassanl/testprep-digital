// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual Firebase config
const firebaseConfig = {
  "projectId": "testprep-digital",
  "appId": "1:892348657654:web:3a4c65f6e208fba2f321d7",
  "storageBucket": "testprep-digital.firebasestorage.app",
  "apiKey": "AIzaSyCfnlaxI1FEn1VZqdodeUG4qrQpowjB8YY",
  "authDomain": "testprep-digital.firebaseapp.com",
  "messagingSenderId": "892348657654"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
