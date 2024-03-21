// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOvWB6NhI4gjmxrjRDdNp3CXzLInGQQcU",
  authDomain: "vb-n-a7133.firebaseapp.com",
  projectId: "vb-n-a7133",
  storageBucket: "vb-n-a7133.appspot.com",
  messagingSenderId: "968547019063",
  appId: "1:968547019063:web:ab95e24ef82d5ec29e12b2",
  measurementId: "G-4JVLVD0JTG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);