
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIfNcuBgiaI-kOl7SpqMxffVz7_yaKorw",
  authDomain: "help-desk-48b68.firebaseapp.com",
  projectId: "help-desk-48b68",
  storageBucket: "help-desk-48b68.appspot.com",
  messagingSenderId: "228127039163",
  appId: "1:228127039163:web:34124d43dfed554a47539e",
  measurementId: "G-EL00EPF45Y"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;