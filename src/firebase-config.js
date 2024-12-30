// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxbjRJp40x0FsX3licUMEbmW36yZnYZiE",
  authDomain: "react-porto-firebase.firebaseapp.com",
  projectId: "react-porto-firebase",
  storageBucket: "react-porto-firebase.firebasestorage.app",
  messagingSenderId: "369236864972",
  appId: "1:369236864972:web:e89226ab125001f2263769",
  measurementId: "G-T1XJ492G5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
