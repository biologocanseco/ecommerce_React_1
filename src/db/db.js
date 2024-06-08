import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5CCAfqJuuY846ojs8EhGx6OgwJ46q0bc",
  authDomain: "ecommerce-react-canseco.firebaseapp.com",
  projectId: "ecommerce-react-canseco",
  storageBucket: "ecommerce-react-canseco.appspot.com",
  messagingSenderId: "761140547383",
  appId: "1:761140547383:web:d7eb2e1fa9d268b4a6d4b2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db