// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR8ajlaZsIOdMKwmxYgOlvvwgwTtZxQOQ",
  authDomain: "ai-trip-planner-49167.firebaseapp.com",
  projectId: "ai-trip-planner-49167",
  storageBucket: "ai-trip-planner-49167.firebasestorage.app",
  messagingSenderId: "452384504540",
  appId: "1:452384504540:web:7bcb97460c11a325799219",
  measurementId: "G-Q6N0CEY3YE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);