// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp3VS_vu_dmfD9Y5M7J8WrS0LKBSAywto",
  authDomain: "redux-store-website.firebaseapp.com",
  projectId: "redux-store-website",
  storageBucket: "redux-store-website.appspot.com",
  messagingSenderId: "354017925206",
  appId: "1:354017925206:web:e2d3fdd25579aff5b643f7",
  measurementId: "G-Z03F9VJ2NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const newLocal = / /;
//auth
const auth = getAuth(app);
 
export { db, auth };
