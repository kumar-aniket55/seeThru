import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBj6632c9XnxSPEvr58O6dEb14b22Xz_yc",
  authDomain: "seethru-dc7c8.firebaseapp.com",
  projectId: "seethru-dc7c8",
  storageBucket: "seethru-dc7c8.appspot.com",
  messagingSenderId: "170840505939",
  appId: "1:170840505939:web:bcfe2c55f5831daf9710a6",
  measurementId: "G-MGD4W37YHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(process.env.REACT_APP_API_KEY)
const provider = new GoogleAuthProvider();
export {auth,provider}