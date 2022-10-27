// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/firebase-auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-wmdKSvrYprbcpb-tsAdAg2OGpphM0eo",
  authDomain: "educare-4a280.firebaseapp.com",
  projectId: "educare-4a280",
  storageBucket: "educare-4a280.appspot.com",
  messagingSenderId: "454465677244",
  appId: "1:454465677244:web:67c8bb93cfc69288886db9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;