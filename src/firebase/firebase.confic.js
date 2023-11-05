// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJthKGkoq3SuLedyzTcpjd5hBAqPjRV0",
  authDomain: "restaurant-management-931c4.firebaseapp.com",
  projectId: "restaurant-management-931c4",
  storageBucket: "restaurant-management-931c4.appspot.com",
  messagingSenderId: "642542669481",
  appId: "1:642542669481:web:6dbf67ae809c0be1ae23b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth