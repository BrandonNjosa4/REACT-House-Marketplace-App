// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7zZh83-w6kvSZiaklxWR4eI446aLaUSA",
  authDomain: "house-marketplace-app-69eda.firebaseapp.com",
  projectId: "house-marketplace-app-69eda",
  storageBucket: "house-marketplace-app-69eda.appspot.com",
  messagingSenderId: "209225157317",
  appId: "1:209225157317:web:32d86335c052ecb1d27eac"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()