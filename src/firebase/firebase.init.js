// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyDcypaJDLXiX-raj_5Sgwnh4mBjZRq2Hj4",
  //   authDomain: "photo-prince.firebaseapp.com",
  //   projectId: "photo-prince",
  //   storageBucket: "photo-prince.appspot.com",
  //   messagingSenderId: "246750566143",
  //   appId: "1:246750566143:web:d7cb9a186d2fb2957c5eca"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
