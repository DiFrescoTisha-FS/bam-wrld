// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT4umAZaxxwpsS3HEpn4oCzs7dWGToGKU",
  authDomain: "bamvsthewrld-427214.firebaseapp.com",
  projectId: "bamvsthewrld-427214",
  storageBucket: "bamvsthewrld-427214.appspot.com",
  messagingSenderId: "630429267478",
  appId: "1:630429267478:web:496f9b1b2ae9c7952a6737",
  measurementId: "G-CKTN396YYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };