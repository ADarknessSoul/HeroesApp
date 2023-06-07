// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxfPKCIACGWkgujlzFjel5b1jWhFaDIbY",
  authDomain: "heroesapp-139aa.firebaseapp.com",
  projectId: "heroesapp-139aa",
  storageBucket: "heroesapp-139aa.appspot.com",
  messagingSenderId: "1020251076478",
  appId: "1:1020251076478:web:ce37414434c54640d9a52f",
  measurementId: "G-TXH3NF0GEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);