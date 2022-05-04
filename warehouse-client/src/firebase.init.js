// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpkSl3eAyg9N1WVHroJjmWEbBPE3oaYss",
  authDomain: "wirehouse-e5bc6.firebaseapp.com",
  projectId: "wirehouse-e5bc6",
  storageBucket: "wirehouse-e5bc6.appspot.com",
  messagingSenderId: "477072098267",
  appId: "1:477072098267:web:601f0029342567681b1dfe"
  // apiKey:process.env.REACT_APP_apiKey ,
  // authDomain:process.env.REACT_APP_authDomain ,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;