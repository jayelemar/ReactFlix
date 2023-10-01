import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB7qRo1Inm1FaS91HnYS-aklDchVcx50LI",
    authDomain: "reactflix-7b904.firebaseapp.com",
    projectId: "reactflix-7b904",
    storageBucket: "reactflix-7b904.appspot.com",
    messagingSenderId: "940904018012",
    appId: "1:940904018012:web:ffad65387579314f3db699",
    measurementId: "G-30S6WVDNGG"
  };

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}