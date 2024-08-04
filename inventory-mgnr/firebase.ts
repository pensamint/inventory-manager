// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "inventory-mgnr.firebaseapp.com",
  projectId: "inventory-mgnr",
  storageBucket: "inventory-mgnr.appspot.com",
  messagingSenderId: "400443468357",
  appId: "1:400443468357:web:4da783a043916d4e9b912c",
  measurementId: "G-0Z09DK252R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};