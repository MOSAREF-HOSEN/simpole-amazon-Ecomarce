// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCbNRveqK8EPjLrTQG-HDCeDgki6rg6Tc8",
//   authDomain: "emazone-full-project.firebaseapp.com",
//   projectId: "emazone-full-project",
//   storageBucket: "emazone-full-project.appspot.com",
//   messagingSenderId: "594010993984",
//   appId: "1:594010993984:web:4701c9c293d8b38a9c76a5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_NPlkC9nu2kOk1dxge6TyGOqwzP8kick",
  authDomain: "emazone-with-fairbase.firebaseapp.com",
  projectId: "emazone-with-fairbase",
  storageBucket: "emazone-with-fairbase.appspot.com",
  messagingSenderId: "778157612195",
  appId: "1:778157612195:web:238166189d4d1e0376f316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;