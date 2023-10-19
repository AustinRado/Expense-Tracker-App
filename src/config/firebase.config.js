import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_BItYyt5_CF8KyH7-3kaOAug6f_MFBo0",
  authDomain: "expense-tracker-bb591.firebaseapp.com",
  projectId: "expense-tracker-bb591",
  storageBucket: "expense-tracker-bb591.appspot.com",
  messagingSenderId: "334730324314",
  appId: "1:334730324314:web:eb6cff0e24db89dbb92b63",
  measurementId: "G-52Z1FD1BNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);