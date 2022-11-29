// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6tKN9ZYGsbWBPMT_8AMkucp6WzeYuaeI",
  authDomain: "cafeteria-3de34.firebaseapp.com",
  projectId: "cafeteria-3de34",
  storageBucket: "cafeteria-3de34.appspot.com",
  messagingSenderId: "969131187141",
  appId: "1:969131187141:web:8ca2d8ad07567acd3e89ac",
  measurementId: "G-W1ZCJGT41Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db